(function(){
	// generamos el modulo de directivas para la tienda.
    var app = angular.module('store-directives', []);
	// https://docs.angularjs.org/guide/directive
	// directiva custom elemento html
    app.directive("productDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "product-description.html"
      };
    });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product-reviews.html"
      };
    });
	// directiva custom atributo html
    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "product-specs.html"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "product-tabs.html",
        // controlador asociado a la directiva.
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        //alias del controlador asociado a la directiva
        controllerAs: "tab"
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();
