L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({

    onAdd: function(map) {
        // Triggered when the layer is added to a map.
        //   Register a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onAdd.call(this, map);
        map.on('click', this.getFeatureInfo, this);
    },

    onRemove: function(map) {
        // Triggered when the layer is removed from a map.
        //   Unregister a click listener, then do all the upstream WMS things
        L.TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.getFeatureInfo, this);
    },

    getFeatureInfo: function(evt) {
        // Make an AJAX request to the server and hope for the best
        var url = this.getFeatureInfoUrl(evt.latlng),
            showResults = L.Util.bind(this.showGetFeatureInfo, this);
        $.ajax({
            url: url,
            success: function(data, status, xhr) {
                var err = typeof data === 'string' ? null : data;
                //Fix for blank popup window
                /*
                var doc = (new DOMParser()).parseFromString(data, "text/html");
                if (doc.body.innerHTML.trim().length > 0) {
                    console.log(data);
                    showResults(err, evt.latlng, data);
                }
                */
                ////////////////////////////////////////////

                if (data.features) {
                    var features = data.features;

                    if (features.length) {
                        for (var i in features) {
                            var feature = features[i];
                            var properties = feature.properties;
                            var html = '<table class="table table-sm" style="text-align: center"> <thead class="thead-dark"> <tr> <th scope="col">Setor</th> <th scope="col">Ambiente</th>'; 
                            
                            if (properties.cod_amb != null) {
                                html += '<th scope="col">Código Ambiente</th>';
                            }

                            html += '<th scope="col">Área (m2)</th> </thead>';
                            html += '<tbody> <tr> <td>' + properties.setor + '</td> <td>' + properties.ambiente + '</td>'; 
                        
                            if (properties.cod_amb != null) {
                                html += '<td>' + properties.cod_amb + '</td>'; 
                            }
                            
                            html += '<td>' + (properties.area).toFixed(2) + '</td> </tr></tbody></table>';
                            
                            html += '<table class="table table-sm" style="text-align: center"> <thead class="thead-dark"> <tr>';
                            
                            if (properties.capacidade != null) {
                                html += '<th scope="col">Capacidade Nominal</th>';
                            }

                            html += '<th scope="col">Capacidade Restrição Mínima</th><th scope="col">Capacidade Restrição Máxima</th></thead>';
                            html += '<tbody> <tr>';
                            
                            if (properties.capacidade != null) {
                            html += '<td>' + properties.capacidade + '</td>';
                            }
                            
                            html += '<td>' +  (properties.area/4).toFixed() + '</td> <td>' +  (properties.area/9).toFixed() + '</td> </tr></tbody></table>';

                            html += '<a href="#" data-toggle="modal" data-target="#modal_indoor_alert" id="alertaIndoor">Há alguma informação errada ou desatualizada? Clique aqui</a>';

                            alerta_indoor(feature);
                        }
                        var err = typeof html === 'string' ? null : html;
                        showResults(err, evt.latlng, html);

                    }
                }

                ////////////////////////////////////////////
            },
            error: function(xhr, status, error) {
                showResults(error);
            }
        });
    },

    getFeatureInfoUrl: function(latlng) {
        // Construct a GetFeatureInfo request URL given a point
        var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
            size = this._map.getSize(),

            params = {
                request: 'GetFeatureInfo',
                service: 'WMS',
                srs: 'EPSG:4326',
                styles: this.wmsParams.styles,
                transparent: this.wmsParams.transparent,
                version: this.wmsParams.version,
                format: this.wmsParams.format,
                bbox: this._map.getBounds().toBBoxString(),
                height: size.y,
                width: size.x,
                layers: this.wmsParams.layers,
                query_layers: this.wmsParams.layers,
                info_format: "application/json",
                //info_format: 'text/html'
            };

        params[params.version === '1.3.0' ? 'i' : 'x'] = parseInt(point.x);
        params[params.version === '1.3.0' ? 'j' : 'y'] = parseInt(point.y);
        if (this.wmsParams.CQL_FILTER) {
            return this.wmsParams.wmslayer + L.Util.getParamString(params, this.wmsParams.wmslayer, true) + "&cql_filter=" + this.wmsParams.CQL_FILTER;
        } else {
            return this.wmsParams.wmslayer + L.Util.getParamString(params, this.wmsParams.wmslayer, true);
        }
    },

    showGetFeatureInfo: function(err, latlng, content, responseText) {
        if (err) { console.log(err); console.log(responseText); return; } // do nothing if there's an error

        // Otherwise show the content in a popup, or something.
        L.popup({ maxWidth: 800 })
            .setLatLng(latlng)
            .setContent(content)
            .openOn(this._map);
    }
});

L.tileLayer.betterWms = function(url, options) {
    return new L.TileLayer.BetterWMS(url, options);
};