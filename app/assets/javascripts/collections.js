TodosCollection = Backbone.Collection.extend({
	// model: model,
	url: "/todos",
	initialize: function(){
		console.log("new collection");
		console.log();
	}
})