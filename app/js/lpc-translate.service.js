angular.module("LpcWebTest2018").service("LpcTranslateService", [
  "$http",
  "$rootScope",
  function($http, $rootScope) {
    var //TODO
      setPropertiesUrlImpl = function(url) {
        //TODO
      },
      loadPropertiesImpl = function() {
        //TODO
        return $http
          .get(
            "https://recette-flash.lepotcommuntest.fr/recruting/2019/get-properties"
          )
          .then(function(response) {
            return response.data;
          });
      };

    return {
      setPropertiesUrl: setPropertiesUrlImpl,
      loadProperties: loadPropertiesImpl
    };
  }
]);
