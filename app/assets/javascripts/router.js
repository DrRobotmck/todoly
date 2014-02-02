Router = Backbone.Router.extend({
	routes: {
		"": "startUp"
	},
	startUp: function(){
		todoItem = new TodoItem();
		allTodos = new TodosCollection({model: todoItem});
		adder = new AddView({collection: allTodos});
		incList = new TodoView({collection: allTodos})
		allTodos.fetch({reset: true});

	}
})