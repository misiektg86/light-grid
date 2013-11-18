﻿grid.module.directive("lgBoundColumn", function () {
	var template = "<lg-column>{{rowData.[property]}}</lg-column>";

	return {
		restrict: "EA",
		template: function(elem, attrs) {
			return template.replace("[property]", attrs.property);
		},
		replace: true
	};
});