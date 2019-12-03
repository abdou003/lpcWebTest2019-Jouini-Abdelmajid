"use strict";

angular.module("LpcWebTest2018").run([
  "LpcTranslateService",
  "RESOURCES",
  "$rootScope",
  function(LpcTranslateService, RESOURCES, $rootScope) {
    //TODO
    LpcTranslateService.loadProperties().then(function(pots_prop) {
      $rootScope.result = pots_prop;
      // resultat = pots_prop["en"];
      //  console.log("locale.", locale);
      //console.log("key.", key);
      /*console.log("resultat :", resultat[key]);*/
      //console.log("pots retrieval .");
    });
  }
]);
