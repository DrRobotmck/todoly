AddView = Backbone.View.extend({
	el: ".add-to-do",
	// extracts the template from the script on the page
	template: _.template($("#add").html()),

	// initializes the view and renders the template
	initialize: function(){
		console.log("initialized bro");
		// console.log(this.template());
		this.render();
	},
	// sets the internal HTML of the el to the template
	render: function(){
		this.$el.html(this.template());
	},
	events: {
		"click #todo-button": "getIt",
		"click #completed":"goThere",
		"click #main":"goHome"
	},
	getIt: function(){
		var todoItem = this.$el.find("#todo-entry").val();
		console.log("set", todoItem);
		// creates a new model based on user input, persists
		var item = this.collection.create({todo: todoItem, incomplete: true}, {wait: true});
		console.log("new model:",item);
	},
	goThere: function(){
		$(".todos-div").addClass("hide");
		$(".done-div").removeClass("hide");
		router.completedList();
	}
});

