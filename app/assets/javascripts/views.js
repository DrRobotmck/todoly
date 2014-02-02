AddView = Backbone.View.extend({
	el: ".add-to-do",
	// extracts the template from the script on the page
	template: _.template($("#add").html()),

	// initializes the view and renders the template
	initialize: function(){
		console.log("initialized bro");
		// console.log(this.template());
		this.render();
		// on reset, will readd all saved todos
		this.listenTo(this.collection, "reset", this.addAll);
	},
	// sets the internal HTML of the el to the template
	render: function(){
		this.$el.html(this.template());
	},
	events: {
		"click #todo-button": "addTodo"
	},
	addTodo: function(){
		console.log("start");
		// gets input from user
		var todoItem = this.$el.find("#todo-entry").val();
		console.log("set", todoItem);
		// creates a new model based on user input, persists
		var item = this.collection.create({todo: todoItem});
		console.log("new view:",item);
		// adds a new todoView based on new model
		new TodoView({model: item});
	},
	addAll: function(){
		console.log(this.collection);
		// adds new todoViews for the entire collection
		this.collection.each(function(todo){
			console.log("add old todo")
			// console.log(todo);
			new TodoView({model: todo});
		})
	}

});

TodoView = Backbone.View.extend({
	el: "#todos",
	template: _.template($("#todo").html()),

	initialize: function(){
		console.log("initialize a todo");
		this.render();
		console.log("added a todo");
	},
	render: function(){
		// renders the template by filling the attributes with the model
		// console.log(this.model.toJSON())
		// console.log(this.template(this.model.toJSON));
		this.$el.append(this.template(this.model.toJSON()));
	},
	events: {
		'click ': "markIt"
	},
	markIt: function(){
		console.log("gonna check it");
		console.log(this);
		// this.model.checkIt();
	}

})