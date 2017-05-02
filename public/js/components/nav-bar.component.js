app.component('navBar', {
	controller: function($http) {
		$http.get('data/' + 'nav-items.json')
		 .then( response => {
		 	this.navItems = response.data;
		});
	},
	template: `
		<ul class="nav-items">
			<li ng-repeat = "navItem in $ctrl.navItems">{{ navItem.label | uppercase }}</li>
		</ul>
	`
});