TodoItem = Backbone.Model.extend({
	// url: "todos",
	initialize:function(){
		console.log("Made a new model");
	},
	defaults: {
		incomplete: true 
	},
	checkIt: function(){
		console.log("updating model");
		this.incomplete == false ? this.set("incomplete", true) : this.set("incomplete", false);
		console.log("toggle");
	}
})