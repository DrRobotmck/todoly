Router = Backbone.Router.extend({
	initialize:function(){
		todoItem = new TodoItem();
		allTodos = new TodosCollection({model: todoItem});
		adder = new AddView({collection: allTodos});
		allTodos.fetch({reset: true});
	},
	routes: {
		"": "startUp",
		"completed": "completedList"
	},
	startUp: function(){
		incList = new TodoView({collection: allTodos});
		allTodos.fetch({reset: true});
	},
	completedList: function(){
		this.navigate("/completed", {trigger: true});
		doneList = new DoneView({collection: allTodos});
		allTodos.fetch({reset: true});
	}
})