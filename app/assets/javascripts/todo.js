
// // todo_app object literal
// var todo_app = {

//   //Takes relevant arguments and creates a 
//   //new task object from the todo_item 
//   //object literal.
//   incompleteList: function(task){
//     if(typeof(incompleteTasks) == 'undefined'){
//       typeof(task) != 'undefined' ? incompleteTasks = [task] : incompleteTasks = [];
//     }else if(typeof(task) !='undefined'){
//       incompleteTasks.push(task)
//     }
//     return incompleteTasks;
//   },
//   completedList: function(task){
//     if(typeof(completeTasks) == 'undefined'){
//       typeof(task) != 'undefined' ? completeTasks = [task] : completeTasks = [];
//     }else if(typeof(task) !='undefined'){
//       completeTasks.push(task)
//     }
//     return completeTasks;
//   },
//   starter: function(){
//     var button = $("#todo-button");
//     var selfie = this;
//     button.click(function(e){
//       e.preventDefault();
//       var item = $("#todo-entry").val();
//       selfie.createTask(item);
//       selfie.incompleteList(item);
//     });


//   },
//   createTask: function(item) {
//     var selfie = this;
//     var todo_item = {


//       todo: item,
//       incomplete: true,
//       // Returns a DOM object representation of a ToDO item. 
//       // Should be called inside the todo_apps appendTask 
//       // function.
//       render: function(){

//         console.log("here",this);
//         var list = $("ol#todos");
//         var full_item = $("<li class='list-item'>");
//         var todo_name = this.todo;
//         var incomplete = $("<input type='checkbox' name='incomplete'>");
//         var deleteIt = $("<input type='button' value='remove'>");

//         full_item.text(todo_name).append(incomplete).append(deleteIt);
//         list.append(full_item);
//         incomplete.click(function(){
//           selfie.incompleteList().splice(selfie.incompleteList().indexOf(todo_name));
//           this.incomplete = false;
//           selfie.completedList(todo_name);
//         });
//         deleteIt.click(function(e){
//           e.preventDefault();
//           selfie
//         })
//       } 
//     }
//   this.appendTask(todo_item);
//   },  //Appends a newly created task to the DOM.
//   appendTask: function(compiledTodo){
//     compiledTodo.render();
//   }

// };

// // // todo_item object literal
// // var todo_item = {

// //   // Returns a DOM object representation of a ToDO item. 
// //   // Should be called inside the todo_apps appendTask 
// //   // function.
// //     render: function(){

// //   }

// // };