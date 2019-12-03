"use strict";

angular.module("LpcWebTest2018").controller("PotsController", [
  "$scope",
  "PotsService",
  "$window",
  "$q",
  function($scope, PotsService, $window, $q) {
    //TODO

    $window.onload = function() {
      $scope.locale = $window.localStorage.getItem("lang");
    };
    PotsService.get()
      .success(function(pots) {
        $scope.pots = pots;

        //console.log("pots returned to controller.", $scope.pots);
      })
      .error(function() {
        console.log("pots retrieval failed.");
      });
    $scope.changeLocale = function(lang) {
      $scope.locale = lang;
      $window.localStorage.setItem("lang", lang);
      console.log($scope.locale);
    };
  }
]);
