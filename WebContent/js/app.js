//App angular para la tienda
//**dentro de una función autoejecutable creo mi modulo principal y 
//le injecto mis directivas en el array que nos proporciona la creación del modulo**//
(function() {
	var app = angular.module('gemStore', [ 'store-directives' ]);
	//controlador de la tienda, con un servicio injectado http
	app.controller('StoreController', [ '$http', '$log', function($http, $log) {
		//almaceno el controlador en una variable, en este caso this hace referncia al controlador
		//porque ese es su ámbito. También podriamos injectar $scope como parámetro y usarlo en vez de this.
		var store = this;
		store.products = [];
		$http.get('js/store-products.json').success(function(data) {
			//usos del servicio log
			  // $log.log('standard log');
			  // $log.info('info log');
			  // $log.error('error log');
			  // $log.warn('warn log');
			  // $log.debug('some debug information');
			
			store.products = data;
			$log.debug('En el data devolvemos el json para rellenar los productos del controlador store', data);
		});
	} ]);
	
	//controlador de las reseñas
	app.controller('ReviewController', function() {
		this.review = {};
		//método que añade las reseñas, recibe un producto como parámetro y luego 
		//le añade una nueva review
		this.addReview = function(product) {
			product.reviews.push(this.review);
			//limpiamos los valroes de los inputs
			this.review = {};
		};
	});
})();