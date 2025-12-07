var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PUNO_1 = new ol.format.GeoJSON();
var features_PUNO_1 = format_PUNO_1.readFeatures(json_PUNO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNO_1.addFeatures(features_PUNO_1);
var lyr_PUNO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNO_1, 
                style: style_PUNO_1,
                popuplayertitle: 'PUNO',
                interactive: true,
                title: '<img src="styles/legend/PUNO_1.png" /> PUNO'
            });
var format_PUNO_PROVINCIAS_2 = new ol.format.GeoJSON();
var features_PUNO_PROVINCIAS_2 = format_PUNO_PROVINCIAS_2.readFeatures(json_PUNO_PROVINCIAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNO_PROVINCIAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNO_PROVINCIAS_2.addFeatures(features_PUNO_PROVINCIAS_2);
var lyr_PUNO_PROVINCIAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNO_PROVINCIAS_2, 
                style: style_PUNO_PROVINCIAS_2,
                popuplayertitle: 'PUNO_PROVINCIAS',
                interactive: true,
                title: '<img src="styles/legend/PUNO_PROVINCIAS_2.png" /> PUNO_PROVINCIAS'
            });
var lyr_ASTGTM_S16W071_dem_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ASTGTM_S16W071_dem<br />\
    <img src="styles/legend/ASTGTM_S16W071_dem_3_0.png" /> 3723<br />\
    <img src="styles/legend/ASTGTM_S16W071_dem_3_1.png" /> 5326<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ASTGTM_S16W071_dem_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7903699.307363, -1804738.850374, -7792348.894489, -1689184.133166]
        })
    });
var lyr_ASTGTM_S16W072_dem_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ASTGTM_S16W072_dem<br />\
    <img src="styles/legend/ASTGTM_S16W072_dem_4_0.png" /> 2150<br />\
    <img src="styles/legend/ASTGTM_S16W072_dem_4_1.png" /> 6188<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ASTGTM_S16W072_dem_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8015018.798156, -1804738.850374, -7903668.385282, -1689184.133166]
        })
    });
var lyr_ASTGTM_S15W071_dem_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ASTGTM_S15W071_dem<br />\
    <img src="styles/legend/ASTGTM_S15W071_dem_5_0.png" /> 3735<br />\
    <img src="styles/legend/ASTGTM_S15W071_dem_5_1.png" /> 5501<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ASTGTM_S15W071_dem_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7903699.307363, -1689216.146060, -7792348.894489, -1574200.613807]
        })
    });
var format_PUNO_LAMPA_6 = new ol.format.GeoJSON();
var features_PUNO_LAMPA_6 = format_PUNO_LAMPA_6.readFeatures(json_PUNO_LAMPA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNO_LAMPA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNO_LAMPA_6.addFeatures(features_PUNO_LAMPA_6);
var lyr_PUNO_LAMPA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNO_LAMPA_6, 
                style: style_PUNO_LAMPA_6,
                popuplayertitle: 'PUNO_LAMPA',
                interactive: true,
                title: '<img src="styles/legend/PUNO_LAMPA_6.png" /> PUNO_LAMPA'
            });
var format_DISTRITOS_LAMPA_7 = new ol.format.GeoJSON();
var features_DISTRITOS_LAMPA_7 = format_DISTRITOS_LAMPA_7.readFeatures(json_DISTRITOS_LAMPA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS_LAMPA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_LAMPA_7.addFeatures(features_DISTRITOS_LAMPA_7);
var lyr_DISTRITOS_LAMPA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRITOS_LAMPA_7, 
                style: style_DISTRITOS_LAMPA_7,
                popuplayertitle: 'DISTRITOS_LAMPA',
                interactive: true,
    title: 'DISTRITOS_LAMPA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_0.png" /> CABANILLA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_1.png" /> CALAPUJA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_2.png" /> LAMPA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_3.png" /> NICASIO<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_4.png" /> OCUVIRI<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_5.png" /> PALCA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_6.png" /> PARATIA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_7.png" /> PUCARA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_8.png" /> SANTA LUCIA<br />\
    <img src="styles/legend/DISTRITOS_LAMPA_7_9.png" /> VILAVILA<br />' });
var format_IE_LAMPA_8 = new ol.format.GeoJSON();
var features_IE_LAMPA_8 = format_IE_LAMPA_8.readFeatures(json_IE_LAMPA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IE_LAMPA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IE_LAMPA_8.addFeatures(features_IE_LAMPA_8);
cluster_IE_LAMPA_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IE_LAMPA_8
});
var lyr_IE_LAMPA_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IE_LAMPA_8, 
                style: style_IE_LAMPA_8,
                popuplayertitle: 'IE_LAMPA',
                interactive: true,
                title: '<img src="styles/legend/IE_LAMPA_8.png" /> IE_LAMPA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PUNO_1.setVisible(true);lyr_PUNO_PROVINCIAS_2.setVisible(true);lyr_ASTGTM_S16W071_dem_3.setVisible(true);lyr_ASTGTM_S16W072_dem_4.setVisible(true);lyr_ASTGTM_S15W071_dem_5.setVisible(true);lyr_PUNO_LAMPA_6.setVisible(true);lyr_DISTRITOS_LAMPA_7.setVisible(true);lyr_IE_LAMPA_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PUNO_1,lyr_PUNO_PROVINCIAS_2,lyr_ASTGTM_S16W071_dem_3,lyr_ASTGTM_S16W072_dem_4,lyr_ASTGTM_S15W071_dem_5,lyr_PUNO_LAMPA_6,lyr_DISTRITOS_LAMPA_7,lyr_IE_LAMPA_8];
lyr_PUNO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'FUENTE': 'FUENTE', 'FUENTE_1': 'FUENTE_1', 'POB_PROYEC': 'POB_PROYEC', 'POBTOTAL': 'POBTOTAL', 'POB_EDAD_T': 'POB_EDAD_T', 'POB_EDAD_1': 'POB_EDAD_1', 'POB_EDAD_E': 'POB_EDAD_E', 'POB_EDAD_2': 'POB_EDAD_2', 'DENSIDAD': 'DENSIDAD', 'POBMASCU': 'POBMASCU', 'POBFEMEN': 'POBFEMEN', 'POBMASCU_P': 'POBMASCU_P', 'POBFEMEN_P': 'POBFEMEN_P', 'R_MASCULIN': 'R_MASCULIN', 'POBURBANA': 'POBURBANA', 'POBRURAL': 'POBRURAL', 'POBURBANA_': 'POBURBANA_', 'POBRURAL_P': 'POBRURAL_P', 'EDAD_PROME': 'EDAD_PROME', 'EDAD_MEDIA': 'EDAD_MEDIA', 'POB_0_14': 'POB_0_14', 'POB_0_14_P': 'POB_0_14_P', 'POB_15_29': 'POB_15_29', 'POB_15_29_': 'POB_15_29_', 'POB_30_59': 'POB_30_59', 'POB_30_59_': 'POB_30_59_', 'POB_60_MAS': 'POB_60_MAS', 'POB_60_M_1': 'POB_60_M_1', 'POB_ANALFA': 'POB_ANALFA', 'POB_ANAL_1': 'POB_ANAL_1', 'HOMBRES_AN': 'HOMBRES_AN', 'HOMBRES__1': 'HOMBRES__1', 'MUJERES_AN': 'MUJERES_AN', 'MUJERES__1': 'MUJERES__1', 'MUJERES_ED': 'MUJERES_ED', 'MUJERES__2': 'MUJERES__2', 'TOTAL_MADR': 'TOTAL_MADR', 'MADRES_SOL': 'MADRES_SOL', 'MADRES_S_1': 'MADRES_S_1', 'MUJERES_AD': 'MUJERES_AD', 'MADRES_ADO': 'MADRES_ADO', 'MADRES_A_1': 'MADRES_A_1', 'AL_MENOS_1': 'AL_MENOS_1', 'AL_MENOS_2': 'AL_MENOS_2', 'SIN_DISCAP': 'SIN_DISCAP', 'SIN_DISC_1': 'SIN_DISC_1', 'ALGUNA_NBI': 'ALGUNA_NBI', 'NBI_PORC': 'NBI_PORC', 'VIV_PARTIC': 'VIV_PARTIC', 'VIV_PART_1': 'VIV_PART_1', 'VIV_PART_2': 'VIV_PART_2', 'HOGARES': 'HOGARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'IC_INF': 'IC_INF', 'IC_SUP': 'IC_SUP', 'UBIC_POBMO': 'UBIC_POBMO', 'TOTAL_DEFU': 'TOTAL_DEFU', 'TOTAL_DE_1': 'TOTAL_DE_1', 'TOTAL_DE_2': 'TOTAL_DE_2', 'NAC_BAJOPE': 'NAC_BAJOPE', 'NAC_BAJO_1': 'NAC_BAJO_1', 'MUJERES_NA': 'MUJERES_NA', 'MUJERES__3': 'MUJERES__3', 'HOMBRES_NA': 'HOMBRES_NA', 'HOMBRES__2': 'HOMBRES__2', 'TOTAL_NACI': 'TOTAL_NACI', 'IND_121951': 'IND_121951', 'IND_122042': 'IND_122042', 'IND_122047': 'IND_122047', 'IND_516462': 'IND_516462', 'IND_516484': 'IND_516484', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_2': 'Shape_Ar_2', });
lyr_PUNO_PROVINCIAS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBDEP': 'NOMBDEP', 'IDPROV': 'IDPROV', 'CCPP': 'CCPP', 'CCDD': 'CCDD', 'NOMBPROV': 'NOMBPROV', 'FUENTE': 'FUENTE', 'POB_PROYEC': 'POB_PROYEC', 'POBTOTAL': 'POBTOTAL', 'POB_EDAD_T': 'POB_EDAD_T', 'POB_EDAD_1': 'POB_EDAD_1', 'POB_EDAD_E': 'POB_EDAD_E', 'POB_EDAD_2': 'POB_EDAD_2', 'DENSIDAD': 'DENSIDAD', 'POBMASCU': 'POBMASCU', 'POBFEMEN': 'POBFEMEN', 'POBMASCU_P': 'POBMASCU_P', 'POBFEMEN_P': 'POBFEMEN_P', 'R_MASCULIN': 'R_MASCULIN', 'POBURBANA': 'POBURBANA', 'POBRURAL': 'POBRURAL', 'POBURBANA_': 'POBURBANA_', 'POBRURAL_P': 'POBRURAL_P', 'EDAD_PROME': 'EDAD_PROME', 'EDAD_MEDIA': 'EDAD_MEDIA', 'POB_0_14': 'POB_0_14', 'POB_0_14_P': 'POB_0_14_P', 'POB_15_29': 'POB_15_29', 'POB_15_29_': 'POB_15_29_', 'POB_30_59': 'POB_30_59', 'POB_30_59_': 'POB_30_59_', 'POB_60_MAS': 'POB_60_MAS', 'POB_60_M_1': 'POB_60_M_1', 'POB_ANALFA': 'POB_ANALFA', 'POB_ANAL_1': 'POB_ANAL_1', 'HOMBRES_AN': 'HOMBRES_AN', 'HOMBRES__1': 'HOMBRES__1', 'MUJERES_AN': 'MUJERES_AN', 'MUJERES__1': 'MUJERES__1', 'MUJERES_ED': 'MUJERES_ED', 'MUJERES__2': 'MUJERES__2', 'TOTAL_MADR': 'TOTAL_MADR', 'MADRES_SOL': 'MADRES_SOL', 'MADRES_S_1': 'MADRES_S_1', 'MUJERES_AD': 'MUJERES_AD', 'MADRES_ADO': 'MADRES_ADO', 'MADRES_A_1': 'MADRES_A_1', 'AL_MENOS_1': 'AL_MENOS_1', 'AL_MENOS_2': 'AL_MENOS_2', 'SIN_DISCAP': 'SIN_DISCAP', 'SIN_DISC_1': 'SIN_DISC_1', 'ALGUNA_NBI': 'ALGUNA_NBI', 'NBI_PORC': 'NBI_PORC', 'VIV_PARTIC': 'VIV_PARTIC', 'VIV_PART_1': 'VIV_PART_1', 'VIV_PART_2': 'VIV_PART_2', 'HOGARES': 'HOGARES', 'IC_INF': 'IC_INF', 'IC_SUP': 'IC_SUP', 'UBIC_POBMO': 'UBIC_POBMO', 'TOTAL_DEFU': 'TOTAL_DEFU', 'TOTAL_DE_1': 'TOTAL_DE_1', 'TOTAL_DE_2': 'TOTAL_DE_2', 'NAC_BAJOPE': 'NAC_BAJOPE', 'NAC_BAJO_1': 'NAC_BAJO_1', 'MUJERES_NA': 'MUJERES_NA', 'MUJERES__3': 'MUJERES__3', 'HOMBRES_NA': 'HOMBRES_NA', 'HOMBRES__2': 'HOMBRES__2', 'TOTAL_NACI': 'TOTAL_NACI', 'IND_121951': 'IND_121951', 'IND_122042': 'IND_122042', 'IND_122047': 'IND_122047', 'IND_516462': 'IND_516462', 'IND_516484': 'IND_516484', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_PUNO_LAMPA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBDEP': 'NOMBDEP', 'IDPROV': 'IDPROV', 'CCPP': 'CCPP', 'CCDD': 'CCDD', 'NOMBPROV': 'NOMBPROV', 'FUENTE': 'FUENTE', 'POB_PROYEC': 'POB_PROYEC', 'POBTOTAL': 'POBTOTAL', 'POB_EDAD_T': 'POB_EDAD_T', 'POB_EDAD_1': 'POB_EDAD_1', 'POB_EDAD_E': 'POB_EDAD_E', 'POB_EDAD_2': 'POB_EDAD_2', 'DENSIDAD': 'DENSIDAD', 'POBMASCU': 'POBMASCU', 'POBFEMEN': 'POBFEMEN', 'POBMASCU_P': 'POBMASCU_P', 'POBFEMEN_P': 'POBFEMEN_P', 'R_MASCULIN': 'R_MASCULIN', 'POBURBANA': 'POBURBANA', 'POBRURAL': 'POBRURAL', 'POBURBANA_': 'POBURBANA_', 'POBRURAL_P': 'POBRURAL_P', 'EDAD_PROME': 'EDAD_PROME', 'EDAD_MEDIA': 'EDAD_MEDIA', 'POB_0_14': 'POB_0_14', 'POB_0_14_P': 'POB_0_14_P', 'POB_15_29': 'POB_15_29', 'POB_15_29_': 'POB_15_29_', 'POB_30_59': 'POB_30_59', 'POB_30_59_': 'POB_30_59_', 'POB_60_MAS': 'POB_60_MAS', 'POB_60_M_1': 'POB_60_M_1', 'POB_ANALFA': 'POB_ANALFA', 'POB_ANAL_1': 'POB_ANAL_1', 'HOMBRES_AN': 'HOMBRES_AN', 'HOMBRES__1': 'HOMBRES__1', 'MUJERES_AN': 'MUJERES_AN', 'MUJERES__1': 'MUJERES__1', 'MUJERES_ED': 'MUJERES_ED', 'MUJERES__2': 'MUJERES__2', 'TOTAL_MADR': 'TOTAL_MADR', 'MADRES_SOL': 'MADRES_SOL', 'MADRES_S_1': 'MADRES_S_1', 'MUJERES_AD': 'MUJERES_AD', 'MADRES_ADO': 'MADRES_ADO', 'MADRES_A_1': 'MADRES_A_1', 'AL_MENOS_1': 'AL_MENOS_1', 'AL_MENOS_2': 'AL_MENOS_2', 'SIN_DISCAP': 'SIN_DISCAP', 'SIN_DISC_1': 'SIN_DISC_1', 'ALGUNA_NBI': 'ALGUNA_NBI', 'NBI_PORC': 'NBI_PORC', 'VIV_PARTIC': 'VIV_PARTIC', 'VIV_PART_1': 'VIV_PART_1', 'VIV_PART_2': 'VIV_PART_2', 'HOGARES': 'HOGARES', 'IC_INF': 'IC_INF', 'IC_SUP': 'IC_SUP', 'UBIC_POBMO': 'UBIC_POBMO', 'TOTAL_DEFU': 'TOTAL_DEFU', 'TOTAL_DE_1': 'TOTAL_DE_1', 'TOTAL_DE_2': 'TOTAL_DE_2', 'NAC_BAJOPE': 'NAC_BAJOPE', 'NAC_BAJO_1': 'NAC_BAJO_1', 'MUJERES_NA': 'MUJERES_NA', 'MUJERES__3': 'MUJERES__3', 'HOMBRES_NA': 'HOMBRES_NA', 'HOMBRES__2': 'HOMBRES__2', 'TOTAL_NACI': 'TOTAL_NACI', 'IND_121951': 'IND_121951', 'IND_122042': 'IND_122042', 'IND_122047': 'IND_122047', 'IND_516462': 'IND_516462', 'IND_516484': 'IND_516484', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_DISTRITOS_LAMPA_7.set('fieldAliases', {'UBIGEO': 'UBIGEO', 'OBJECTID': 'OBJECTID', 'NOMBDEP': 'NOMBDEP', 'NOMBPROV': 'NOMBPROV', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'POBTOTAL': 'POBTOTAL', 'LINKS': 'LINKS', });
lyr_IE_LAMPA_8.set('fieldAliases', {'CODLOCAL': 'CODLOCAL', 'NOMCPSIG': 'NOMCPSIG', 'X_LONGITUD': 'X_LONGITUD', 'Y_LATITUD': 'Y_LATITUD', 'ESTADO_LOC': 'ESTADO_LOC', 'CPDIF': 'CPDIF', 'OBS': 'OBS', 'CEN_EDU': 'CEN_EDU', 'CODCPSIG_O': 'CODCPSIG_O', 'OBJECTID': 'OBJECTID', 'Fecha_P': 'Fecha_P', 'OBS_E': 'OBS_E', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_DET_UB': 'FTE_DET_UB', 'Fecha_L': 'Fecha_L', 'CORD_YX': 'CORD_YX', 'FTE_LOCD': 'FTE_LOCD', 'VAL': 'VAL', 'NALT_LOCAL': 'NALT_LOCAL', 'ANO_GEOREF': 'ANO_GEOREF', 'XESTE_UTM': 'XESTE_UTM', 'YNORTE_UTM': 'YNORTE_UTM', });
lyr_PUNO_1.set('fieldImages', {'OBJECTID': '', 'CCDD': '', 'NOMBDEP': '', 'FUENTE': '', 'FUENTE_1': '', 'POB_PROYEC': '', 'POBTOTAL': '', 'POB_EDAD_T': '', 'POB_EDAD_1': '', 'POB_EDAD_E': '', 'POB_EDAD_2': '', 'DENSIDAD': '', 'POBMASCU': '', 'POBFEMEN': '', 'POBMASCU_P': '', 'POBFEMEN_P': '', 'R_MASCULIN': '', 'POBURBANA': '', 'POBRURAL': '', 'POBURBANA_': '', 'POBRURAL_P': '', 'EDAD_PROME': '', 'EDAD_MEDIA': '', 'POB_0_14': '', 'POB_0_14_P': '', 'POB_15_29': '', 'POB_15_29_': '', 'POB_30_59': '', 'POB_30_59_': '', 'POB_60_MAS': '', 'POB_60_M_1': '', 'POB_ANALFA': '', 'POB_ANAL_1': '', 'HOMBRES_AN': '', 'HOMBRES__1': '', 'MUJERES_AN': '', 'MUJERES__1': '', 'MUJERES_ED': '', 'MUJERES__2': '', 'TOTAL_MADR': '', 'MADRES_SOL': '', 'MADRES_S_1': '', 'MUJERES_AD': '', 'MADRES_ADO': '', 'MADRES_A_1': '', 'AL_MENOS_1': '', 'AL_MENOS_2': '', 'SIN_DISCAP': '', 'SIN_DISC_1': '', 'ALGUNA_NBI': '', 'NBI_PORC': '', 'VIV_PARTIC': '', 'VIV_PART_1': '', 'VIV_PART_2': '', 'HOGARES': '', 'Shape_Leng': '', 'Shape_Area': '', 'IC_INF': '', 'IC_SUP': '', 'UBIC_POBMO': '', 'TOTAL_DEFU': '', 'TOTAL_DE_1': '', 'TOTAL_DE_2': '', 'NAC_BAJOPE': '', 'NAC_BAJO_1': '', 'MUJERES_NA': '', 'MUJERES__3': '', 'HOMBRES_NA': '', 'HOMBRES__2': '', 'TOTAL_NACI': '', 'IND_121951': '', 'IND_122042': '', 'IND_122047': '', 'IND_516462': '', 'IND_516484': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'Shape_Le_2': '', 'Shape_Ar_2': '', });
lyr_PUNO_PROVINCIAS_2.set('fieldImages', {'OBJECTID': '', 'NOMBDEP': '', 'IDPROV': '', 'CCPP': '', 'CCDD': '', 'NOMBPROV': '', 'FUENTE': '', 'POB_PROYEC': '', 'POBTOTAL': '', 'POB_EDAD_T': '', 'POB_EDAD_1': '', 'POB_EDAD_E': '', 'POB_EDAD_2': '', 'DENSIDAD': '', 'POBMASCU': '', 'POBFEMEN': '', 'POBMASCU_P': '', 'POBFEMEN_P': '', 'R_MASCULIN': '', 'POBURBANA': '', 'POBRURAL': '', 'POBURBANA_': '', 'POBRURAL_P': '', 'EDAD_PROME': '', 'EDAD_MEDIA': '', 'POB_0_14': '', 'POB_0_14_P': '', 'POB_15_29': '', 'POB_15_29_': '', 'POB_30_59': '', 'POB_30_59_': '', 'POB_60_MAS': '', 'POB_60_M_1': '', 'POB_ANALFA': '', 'POB_ANAL_1': '', 'HOMBRES_AN': '', 'HOMBRES__1': '', 'MUJERES_AN': '', 'MUJERES__1': '', 'MUJERES_ED': '', 'MUJERES__2': '', 'TOTAL_MADR': '', 'MADRES_SOL': '', 'MADRES_S_1': '', 'MUJERES_AD': '', 'MADRES_ADO': '', 'MADRES_A_1': '', 'AL_MENOS_1': '', 'AL_MENOS_2': '', 'SIN_DISCAP': '', 'SIN_DISC_1': '', 'ALGUNA_NBI': '', 'NBI_PORC': '', 'VIV_PARTIC': '', 'VIV_PART_1': '', 'VIV_PART_2': '', 'HOGARES': '', 'IC_INF': '', 'IC_SUP': '', 'UBIC_POBMO': '', 'TOTAL_DEFU': '', 'TOTAL_DE_1': '', 'TOTAL_DE_2': '', 'NAC_BAJOPE': '', 'NAC_BAJO_1': '', 'MUJERES_NA': '', 'MUJERES__3': '', 'HOMBRES_NA': '', 'HOMBRES__2': '', 'TOTAL_NACI': '', 'IND_121951': '', 'IND_122042': '', 'IND_122047': '', 'IND_516462': '', 'IND_516484': '', 'Shape_Leng': '', 'Shape_Area': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', });
lyr_PUNO_LAMPA_6.set('fieldImages', {'OBJECTID': '', 'NOMBDEP': '', 'IDPROV': '', 'CCPP': '', 'CCDD': '', 'NOMBPROV': '', 'FUENTE': '', 'POB_PROYEC': '', 'POBTOTAL': '', 'POB_EDAD_T': '', 'POB_EDAD_1': '', 'POB_EDAD_E': '', 'POB_EDAD_2': '', 'DENSIDAD': '', 'POBMASCU': '', 'POBFEMEN': '', 'POBMASCU_P': '', 'POBFEMEN_P': '', 'R_MASCULIN': '', 'POBURBANA': '', 'POBRURAL': '', 'POBURBANA_': '', 'POBRURAL_P': '', 'EDAD_PROME': '', 'EDAD_MEDIA': '', 'POB_0_14': '', 'POB_0_14_P': '', 'POB_15_29': '', 'POB_15_29_': '', 'POB_30_59': '', 'POB_30_59_': '', 'POB_60_MAS': '', 'POB_60_M_1': '', 'POB_ANALFA': '', 'POB_ANAL_1': '', 'HOMBRES_AN': '', 'HOMBRES__1': '', 'MUJERES_AN': '', 'MUJERES__1': '', 'MUJERES_ED': '', 'MUJERES__2': '', 'TOTAL_MADR': '', 'MADRES_SOL': '', 'MADRES_S_1': '', 'MUJERES_AD': '', 'MADRES_ADO': '', 'MADRES_A_1': '', 'AL_MENOS_1': '', 'AL_MENOS_2': '', 'SIN_DISCAP': '', 'SIN_DISC_1': '', 'ALGUNA_NBI': '', 'NBI_PORC': '', 'VIV_PARTIC': '', 'VIV_PART_1': '', 'VIV_PART_2': '', 'HOGARES': '', 'IC_INF': '', 'IC_SUP': '', 'UBIC_POBMO': '', 'TOTAL_DEFU': '', 'TOTAL_DE_1': '', 'TOTAL_DE_2': '', 'NAC_BAJOPE': '', 'NAC_BAJO_1': '', 'MUJERES_NA': '', 'MUJERES__3': '', 'HOMBRES_NA': '', 'HOMBRES__2': '', 'TOTAL_NACI': '', 'IND_121951': '', 'IND_122042': '', 'IND_122047': '', 'IND_516462': '', 'IND_516484': '', 'Shape_Leng': '', 'Shape_Area': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', });
lyr_DISTRITOS_LAMPA_7.set('fieldImages', {'UBIGEO': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBDEP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', 'POBTOTAL': 'TextEdit', 'LINKS': '', });
lyr_IE_LAMPA_8.set('fieldImages', {'CODLOCAL': '', 'NOMCPSIG': '', 'X_LONGITUD': '', 'Y_LATITUD': '', 'ESTADO_LOC': '', 'CPDIF': '', 'OBS': '', 'CEN_EDU': '', 'CODCPSIG_O': '', 'OBJECTID': '', 'Fecha_P': '', 'OBS_E': '', 'FUENTE_LOC': '', 'FTE_DET_UB': '', 'Fecha_L': '', 'CORD_YX': '', 'FTE_LOCD': '', 'VAL': '', 'NALT_LOCAL': '', 'ANO_GEOREF': '', 'XESTE_UTM': '', 'YNORTE_UTM': '', });
lyr_PUNO_1.set('fieldLabels', {'OBJECTID': 'no label', 'CCDD': 'no label', 'NOMBDEP': 'no label', 'FUENTE': 'no label', 'FUENTE_1': 'no label', 'POB_PROYEC': 'no label', 'POBTOTAL': 'no label', 'POB_EDAD_T': 'no label', 'POB_EDAD_1': 'no label', 'POB_EDAD_E': 'no label', 'POB_EDAD_2': 'no label', 'DENSIDAD': 'no label', 'POBMASCU': 'no label', 'POBFEMEN': 'no label', 'POBMASCU_P': 'no label', 'POBFEMEN_P': 'no label', 'R_MASCULIN': 'no label', 'POBURBANA': 'no label', 'POBRURAL': 'no label', 'POBURBANA_': 'no label', 'POBRURAL_P': 'no label', 'EDAD_PROME': 'no label', 'EDAD_MEDIA': 'no label', 'POB_0_14': 'no label', 'POB_0_14_P': 'no label', 'POB_15_29': 'no label', 'POB_15_29_': 'no label', 'POB_30_59': 'no label', 'POB_30_59_': 'no label', 'POB_60_MAS': 'no label', 'POB_60_M_1': 'no label', 'POB_ANALFA': 'no label', 'POB_ANAL_1': 'no label', 'HOMBRES_AN': 'no label', 'HOMBRES__1': 'no label', 'MUJERES_AN': 'no label', 'MUJERES__1': 'no label', 'MUJERES_ED': 'no label', 'MUJERES__2': 'no label', 'TOTAL_MADR': 'no label', 'MADRES_SOL': 'no label', 'MADRES_S_1': 'no label', 'MUJERES_AD': 'no label', 'MADRES_ADO': 'no label', 'MADRES_A_1': 'no label', 'AL_MENOS_1': 'no label', 'AL_MENOS_2': 'no label', 'SIN_DISCAP': 'no label', 'SIN_DISC_1': 'no label', 'ALGUNA_NBI': 'no label', 'NBI_PORC': 'no label', 'VIV_PARTIC': 'no label', 'VIV_PART_1': 'no label', 'VIV_PART_2': 'no label', 'HOGARES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'IC_INF': 'no label', 'IC_SUP': 'no label', 'UBIC_POBMO': 'no label', 'TOTAL_DEFU': 'no label', 'TOTAL_DE_1': 'no label', 'TOTAL_DE_2': 'no label', 'NAC_BAJOPE': 'no label', 'NAC_BAJO_1': 'no label', 'MUJERES_NA': 'no label', 'MUJERES__3': 'no label', 'HOMBRES_NA': 'no label', 'HOMBRES__2': 'no label', 'TOTAL_NACI': 'no label', 'IND_121951': 'no label', 'IND_122042': 'no label', 'IND_122047': 'no label', 'IND_516462': 'no label', 'IND_516484': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_2': 'no label', });
lyr_PUNO_PROVINCIAS_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBDEP': 'no label', 'IDPROV': 'no label', 'CCPP': 'no label', 'CCDD': 'no label', 'NOMBPROV': 'no label', 'FUENTE': 'no label', 'POB_PROYEC': 'no label', 'POBTOTAL': 'no label', 'POB_EDAD_T': 'no label', 'POB_EDAD_1': 'no label', 'POB_EDAD_E': 'no label', 'POB_EDAD_2': 'no label', 'DENSIDAD': 'no label', 'POBMASCU': 'no label', 'POBFEMEN': 'no label', 'POBMASCU_P': 'no label', 'POBFEMEN_P': 'no label', 'R_MASCULIN': 'no label', 'POBURBANA': 'no label', 'POBRURAL': 'no label', 'POBURBANA_': 'no label', 'POBRURAL_P': 'no label', 'EDAD_PROME': 'no label', 'EDAD_MEDIA': 'no label', 'POB_0_14': 'no label', 'POB_0_14_P': 'no label', 'POB_15_29': 'no label', 'POB_15_29_': 'no label', 'POB_30_59': 'no label', 'POB_30_59_': 'no label', 'POB_60_MAS': 'no label', 'POB_60_M_1': 'no label', 'POB_ANALFA': 'no label', 'POB_ANAL_1': 'no label', 'HOMBRES_AN': 'no label', 'HOMBRES__1': 'no label', 'MUJERES_AN': 'no label', 'MUJERES__1': 'no label', 'MUJERES_ED': 'no label', 'MUJERES__2': 'no label', 'TOTAL_MADR': 'no label', 'MADRES_SOL': 'no label', 'MADRES_S_1': 'no label', 'MUJERES_AD': 'no label', 'MADRES_ADO': 'no label', 'MADRES_A_1': 'no label', 'AL_MENOS_1': 'no label', 'AL_MENOS_2': 'no label', 'SIN_DISCAP': 'no label', 'SIN_DISC_1': 'no label', 'ALGUNA_NBI': 'no label', 'NBI_PORC': 'no label', 'VIV_PARTIC': 'no label', 'VIV_PART_1': 'no label', 'VIV_PART_2': 'no label', 'HOGARES': 'no label', 'IC_INF': 'no label', 'IC_SUP': 'no label', 'UBIC_POBMO': 'no label', 'TOTAL_DEFU': 'no label', 'TOTAL_DE_1': 'no label', 'TOTAL_DE_2': 'no label', 'NAC_BAJOPE': 'no label', 'NAC_BAJO_1': 'no label', 'MUJERES_NA': 'no label', 'MUJERES__3': 'no label', 'HOMBRES_NA': 'no label', 'HOMBRES__2': 'no label', 'TOTAL_NACI': 'no label', 'IND_121951': 'no label', 'IND_122042': 'no label', 'IND_122047': 'no label', 'IND_516462': 'no label', 'IND_516484': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_PUNO_LAMPA_6.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBDEP': 'no label', 'IDPROV': 'no label', 'CCPP': 'no label', 'CCDD': 'no label', 'NOMBPROV': 'no label', 'FUENTE': 'no label', 'POB_PROYEC': 'no label', 'POBTOTAL': 'no label', 'POB_EDAD_T': 'no label', 'POB_EDAD_1': 'no label', 'POB_EDAD_E': 'no label', 'POB_EDAD_2': 'no label', 'DENSIDAD': 'no label', 'POBMASCU': 'no label', 'POBFEMEN': 'no label', 'POBMASCU_P': 'no label', 'POBFEMEN_P': 'no label', 'R_MASCULIN': 'no label', 'POBURBANA': 'no label', 'POBRURAL': 'no label', 'POBURBANA_': 'no label', 'POBRURAL_P': 'no label', 'EDAD_PROME': 'no label', 'EDAD_MEDIA': 'no label', 'POB_0_14': 'no label', 'POB_0_14_P': 'no label', 'POB_15_29': 'no label', 'POB_15_29_': 'no label', 'POB_30_59': 'no label', 'POB_30_59_': 'no label', 'POB_60_MAS': 'no label', 'POB_60_M_1': 'no label', 'POB_ANALFA': 'no label', 'POB_ANAL_1': 'no label', 'HOMBRES_AN': 'no label', 'HOMBRES__1': 'no label', 'MUJERES_AN': 'no label', 'MUJERES__1': 'no label', 'MUJERES_ED': 'no label', 'MUJERES__2': 'no label', 'TOTAL_MADR': 'no label', 'MADRES_SOL': 'no label', 'MADRES_S_1': 'no label', 'MUJERES_AD': 'no label', 'MADRES_ADO': 'no label', 'MADRES_A_1': 'no label', 'AL_MENOS_1': 'no label', 'AL_MENOS_2': 'no label', 'SIN_DISCAP': 'no label', 'SIN_DISC_1': 'no label', 'ALGUNA_NBI': 'no label', 'NBI_PORC': 'no label', 'VIV_PARTIC': 'no label', 'VIV_PART_1': 'no label', 'VIV_PART_2': 'no label', 'HOGARES': 'no label', 'IC_INF': 'no label', 'IC_SUP': 'no label', 'UBIC_POBMO': 'no label', 'TOTAL_DEFU': 'no label', 'TOTAL_DE_1': 'no label', 'TOTAL_DE_2': 'no label', 'NAC_BAJOPE': 'no label', 'NAC_BAJO_1': 'no label', 'MUJERES_NA': 'no label', 'MUJERES__3': 'no label', 'HOMBRES_NA': 'no label', 'HOMBRES__2': 'no label', 'TOTAL_NACI': 'no label', 'IND_121951': 'no label', 'IND_122042': 'no label', 'IND_122047': 'no label', 'IND_516462': 'no label', 'IND_516484': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_DISTRITOS_LAMPA_7.set('fieldLabels', {'UBIGEO': 'no label', 'OBJECTID': 'no label', 'NOMBDEP': 'no label', 'NOMBPROV': 'no label', 'NOMBDIST': 'inline label - always visible', 'CAPITAL': 'no label', 'POBTOTAL': 'no label', 'LINKS': 'no label', });
lyr_IE_LAMPA_8.set('fieldLabels', {'CODLOCAL': 'no label', 'NOMCPSIG': 'no label', 'X_LONGITUD': 'no label', 'Y_LATITUD': 'no label', 'ESTADO_LOC': 'no label', 'CPDIF': 'no label', 'OBS': 'no label', 'CEN_EDU': 'no label', 'CODCPSIG_O': 'no label', 'OBJECTID': 'no label', 'Fecha_P': 'no label', 'OBS_E': 'no label', 'FUENTE_LOC': 'no label', 'FTE_DET_UB': 'no label', 'Fecha_L': 'no label', 'CORD_YX': 'no label', 'FTE_LOCD': 'no label', 'VAL': 'no label', 'NALT_LOCAL': 'no label', 'ANO_GEOREF': 'no label', 'XESTE_UTM': 'no label', 'YNORTE_UTM': 'no label', });
lyr_IE_LAMPA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});