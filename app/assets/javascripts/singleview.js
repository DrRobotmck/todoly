SingleView = Backbone.View.extend({
	tagName: "li",
	template: _.template($("#todo").html()),
	initialize: function(){
		console.log("Start a new todo");
		this.listenTo(this.model,"change:incomplete", this.render)
		this.listenTo(this.model,"destroy",this.remove)
		this.render();
	},
	render: function(){
		var compiled = this.template(this.model.toJSON());
		console.log(compiled)
		this.$el.html(compiled);
	},
	events: {
		"click :checkbox": "markIt",
		"click .delete": "deleteTodo"
	},
	markIt: function(){
		changer = this.model.get("incomplete");
		console.log(changer,"checked");
		if(changer == false){
			this.model.set("incomplete", true);
		}else if(changer == true){
			this.model.set("incomplete", false);
			console.log("set false");
		}
		this.model.save();
		console.log("updated");
	},
	deleteTodo: function(){
		console.log("gonna delete it", this.model);
		this.model.destroy();
		console.log(allTodos);
	}
})