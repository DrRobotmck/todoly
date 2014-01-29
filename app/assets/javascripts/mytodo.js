function Todo(title){
	this.title = title;
	this.incomplete = true;
	this.render = function(){
		var self = this
		console.log(this)
		var list = $("ol#todos");
    var full_item = $("<li class='list-item'>");
    var todo_name = this.title;
    var incomplete = $("<input type='checkbox' name='incomplete'>");
    var deleteIt = $("<input type='button' value='remove'>");
    
    full_item.text(todo_name).append(incomplete).append(deleteIt);
    list.append(full_item);
    
    incomplete.click(function(){
    	console.log(this,self);
			self.completeIt();
			
			if(self.incomplete == false){
			 $("ol#done").append(incomplete.parent());
			 todos.incomplete.splice(self);
			 todos.completed.push(self);
			}else if(self.incomplete == true){
				$("ol#todos").append(incomplete.parent());
				todos.completed.splice(self);
				todos.incomplete.push(self);
			}

		})
		
		deleteIt.click(function(){
			deleteIt.parent().remove();
		})
	} 
}

Todo.prototype.completeIt = function(){
	this.incomplete == true ? this.incomplete = false : this.incomplete = true;
}

var todos = {
	incomplete: [],
	completed: [],
	makeIt: function(){
		var input = $("#todo-entry");
		var submit = $("#todo-button");

		submit.click(function(e){
			e.preventDefault();
			var newDo = new Todo(input.val());
			newDo.render();
			todos.incomplete.push(newDo);
		})
	}
}

