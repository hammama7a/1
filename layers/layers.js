var wms_layers = [];

var format_Border_0 = new ol.format.GeoJSON();
var features_Border_0 = format_Border_0.readFeatures(json_Border_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_0.addFeatures(features_Border_0);
var lyr_Border_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Border_0, 
                style: style_Border_0,
                interactive: true,
                title: '<img src="styles/legend/Border_0.png" /> Border'
            });
var format_RoadSystem_1 = new ol.format.GeoJSON();
var features_RoadSystem_1 = format_RoadSystem_1.readFeatures(json_RoadSystem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadSystem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadSystem_1.addFeatures(features_RoadSystem_1);
var lyr_RoadSystem_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadSystem_1, 
                style: style_RoadSystem_1,
                interactive: true,
    title: 'Road System<br />\
    <img src="styles/legend/RoadSystem_1_0.png" /> Bypass Road<br />\
    <img src="styles/legend/RoadSystem_1_1.png" /> Local Road<br />\
    <img src="styles/legend/RoadSystem_1_2.png" /> Main Road<br />'
        });
var format_Polygon_2 = new ol.format.GeoJSON();
var features_Polygon_2 = format_Polygon_2.readFeatures(json_Polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_2.addFeatures(features_Polygon_2);
var lyr_Polygon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polygon_2, 
                style: style_Polygon_2,
                interactive: true,
                title: '<img src="styles/legend/Polygon_2.png" /> Polygon'
            });
var format_important_places_3 = new ol.format.GeoJSON();
var features_important_places_3 = format_important_places_3.readFeatures(json_important_places_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_important_places_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_important_places_3.addFeatures(features_important_places_3);
var lyr_important_places_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_important_places_3, 
                style: style_important_places_3,
                interactive: true,
                title: '<img src="styles/legend/important_places_3.png" /> important_places'
            });

lyr_Border_0.setVisible(true);lyr_RoadSystem_1.setVisible(true);lyr_Polygon_2.setVisible(true);lyr_important_places_3.setVisible(true);
var layersList = [lyr_Border_0,lyr_RoadSystem_1,lyr_Polygon_2,lyr_important_places_3];
lyr_Border_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr_RoadSystem_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Type': 'Type', 'NAME': 'NAME', });
lyr_Polygon_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_important_places_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', 'Name': 'Name', });
lyr_Border_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_RoadSystem_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Type': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Polygon_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_important_places_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', });
lyr_Border_0.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr_RoadSystem_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Type': 'no label', 'NAME': 'no label', });
lyr_Polygon_2.set('fieldLabels', {'OBJECTID': 'no label', 'Layer': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_important_places_3.set('fieldLabels', {'OBJECTID': 'no label', 'Type': 'no label', 'Name': 'no label', });
lyr_important_places_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});