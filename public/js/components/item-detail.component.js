angular.module('myApp').component('itemDetail', {
	templateUrl: '/js/components/item-detail.template.html',
	controller: function ($http, $routeParams) {

		$http.get('/data/' + 'sale-items.json')
			.then( response => {
				var itemChoices = response.data;
				var itemId = $routeParams.itemId;
				this.item = (itemChoices.filter((choice) => choice.id === itemId))[0];
		})
	}
})