"use strict";

angular.module("LpcWebTest2018").service("PotsService", [
  "$http",
  "RESOURCES",
  function($http, RESOURCES) {
    var getImpl = function() {
      //TODO
      return $http
        .get("https://recette-flash.lepotcommuntest.fr/recruting/2019/get-pots")
        .success(function(data) {
          //console.log(data);
        });
    };

    return {
      get: getImpl
    };
  }
]);
