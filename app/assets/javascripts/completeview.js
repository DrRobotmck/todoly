DoneView = Backbone.View.extend({
	el: "#done",

	initialize: function(){
		console.log("initialize a todo List");
		// on reset, will readd all saved todos
		this.listenTo(this.collection, "reset", this.addAll);
		this.listenTo(this.collection, "add", this.addTodo);
		this.listenTo(this.collection, "remove", this.deleteIt);
		console.log("added a todo");
	},
	addAll: function(){
		// console.log(this.collection);
		// adds new SingleViews for the entire collection
		this.$el.empty();
			console.log("add old todo");
			// console.log(todo);
			console.log(this.collection.models);
			this.collection.each(this.addTodo,this);
	},
	addTodo: function(item){
		var inc = item.get("incomplete");
		console.log(item.get("incomplete"));
		if(inc == false){
			var todo = new SingleView({model: item});
			console.log(todo.el);
			this.$el.append(todo.el);
		}
	}

})