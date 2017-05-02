angular.module('myApp').component('itemsList', {
	templateUrl: 'js/components/items-list.template.html',
	controller: function () {
		this.doShowConfirm = function(doShow) {
			this.showConfirm = doShow;
		}
	}
})