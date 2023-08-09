var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_pacifico_complet_1 = new ol.format.GeoJSON();
var features_cuadricula_pacifico_complet_1 = format_cuadricula_pacifico_complet_1.readFeatures(json_cuadricula_pacifico_complet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_pacifico_complet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_pacifico_complet_1.addFeatures(features_cuadricula_pacifico_complet_1);
var lyr_cuadricula_pacifico_complet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_pacifico_complet_1, 
                style: style_cuadricula_pacifico_complet_1,
                interactive: true,
    title: 'cuadricula_pacifico_complet<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_1.png" /> 1 - 4<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_2.png" /> 4 - 8<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_3.png" /> 8 - 14<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_4.png" /> 14 - 21<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_5.png" /> 21 - 29<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_6.png" /> 29 - 39<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_7.png" /> 39 - 51<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_8.png" /> 51 - 88<br />\
    <img src="styles/legend/cuadricula_pacifico_complet_1_9.png" /> 88 - 112<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_pacifico_complet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_pacifico_complet_1];
lyr_cuadricula_pacifico_complet_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_cuadricula_pacifico_complet_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_cuadricula_pacifico_complet_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_cuadricula_pacifico_complet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});