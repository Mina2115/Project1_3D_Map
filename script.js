require(["esri/config",
         "esri/WebScene",
         "esri/views/SceneView",                
         "esri/widgets/Legend", 
         "esri/layers/FeatureLayer"], 
         function (esriConfig, WebScene, SceneView,  Legend,FeatureLayer) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 
  
const webscene = new WebScene({
        portalItem: {
          id: "9221e74e53f54aecbcc33fefea7bc8a8"
        }
      }); 
  
  const view = new SceneView({
        container: "viewDiv",
        map:scene
      });
  
  const legend = new Legend ({
        view:view
      });

      view.ui.add(legend, "top-right");
  
const countylayer = new FeatureLayer({
  url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_2018_County_Boundaries/FeatureServer"
});

 webscene.add(countylayer);
  
var template = {
    title: "{NAME}"};  

const collegelayer = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Mina_Final_Project_13AUG20_WFL1/FeatureServer", 
outFields: ["*"],
popupTemplate: template});

webscene.add(collegelayer);
 
});
  
   
