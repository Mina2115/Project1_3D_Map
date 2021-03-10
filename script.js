require(["esri/Map",
         "esri/WebScene",                        "esri/views/SceneView",                "esri/widgets/Legend", "esri/layers/FeatureLayer",
        "dojo/domReady!"], function ( Map, WebScene, SceneView,  Legend, FeatureLayer) {

var map = new Map({
    basemap: "topo"
});
  

const view = new SceneView({
        container: "viewDiv",
        map: map,
        center: [-92.6,38.8],
        zoom: 7

});

    const legend = new Legend ({
        view: view,
              
});

  // Add widget to the bottom right corner of the view
      view.ui.add(legend, "bottom-right");

const countylayer = new FeatureLayer({
  url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_2018_County_Boundaries/FeatureServer"
});

 map.add(countylayer);
  
var template = {
    title: "{NAME}"};  

const collegelayer = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Mina_Final_Project_13AUG20_WFL1/FeatureServer", 
outFields: ["*"],
popupTemplate: template});

map.add(collegelayer);
  
});  


  
   
