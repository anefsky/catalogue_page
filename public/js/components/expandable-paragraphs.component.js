app.component('expandableParagraphs', {
	controller: function() {
		this.copyText = 'This section is expanded.  This section can be collapsed by clicking on the "Expanded" Text.  This section is expanded.  This section can be collapsed by clicking on the "Expanded" Text.';
		this.numberOfParagraphs = 3;

		this.expandedStates = [];
		for(let i = 0; i < this.numberOfParagraphs; i++) {
			this.expandedStates.push(false);
		}
	},

	template: `
		<ul>
		<li class="paragraph" ng-repeat = "i in $ctrl.expandedStates track by $index" 
				ng-class="{ expanded: $ctrl.expandedStates[$index]}">
			<p class="expander" 
				ng-click="$ctrl.expandedStates[$index] = !$ctrl.expandedStates[$index]">
				<img ng-src="{{$ctrl.expandedStates[$index] ? 
						'assets/arrow-expanded.png' : 'assets/arrow-collapsed.png'}}"/>
				{{ $ctrl.expandedStates[$index] ? 'EXPANDED' : 'COLLAPSED' }}
			</p>
			<p class="copy-text">{{ $ctrl.copyText }}</p>
		</li>
		</ul>
	`
})