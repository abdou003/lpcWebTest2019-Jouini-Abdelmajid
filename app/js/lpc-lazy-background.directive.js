"use strict";

angular.module("LpcWebTest2018").directive("lpcLazyBackground", [
  "$timeout",
  function($timeout) {
    var lpcLazyBackgroundLink = function(scope, elem, attr) {
      let url = scope.lpcLazyBackground;
      let retrieveUrl = url.substring(22);
      //TODO

      elem.addClass("loadingSVG");
      var image = new Image();
      image.onload = function() {
        scope.$apply(function() {
          elem.css({
            backgroundImage: "url( https://recrutement." + retrieveUrl + ")",
            backgroundSize: "cover",
            width: "400px",
            minHeight: "200px"
          });
          elem.removeClass("loadingSVG");
        });
      };
      image.src = "https://recrutement." + retrieveUrl;
    };
    return {
      restrict: "A",
      scope: { lpcLazyBackground: "=" },
      link: lpcLazyBackgroundLink
    };
  }
]);
