"use strict";

angular.module("LpcWebTest2018").filter("lpcTranslate", [
  "LpcTranslateService",
  "$rootScope",
  "$timeout",
  function(LpcTranslateService, $rootScope, $timeout) {
    //TODO

    return function(key, locale) {
      //TODO
      if (locale == null || locale == "") {
        return;
      } else {
        LpcTranslateService.loadProperties().then(function(pots_prop) {
          $rootScope.result = pots_prop;
        });

        return $rootScope.result[locale][key];
      }
    };
  }
]);
