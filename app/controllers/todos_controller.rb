class TodosController < ApplicationController

	def index
		@todo = Todo.all
		respond_to do |format|
			format.html {render :index}
			format.json {render json: @todo, status: 201}
		end
	end
	def show
	end
	def create
		@todo = Todo.create(todo_params)
		respond_to do |format|
			format.html {render nothing: true}
			format.json {render json: @todo, status: 201}
		end
	end
	def update
	end
	def destroy
	end

	private
	def todo_params
		params.permit(:todo);
	end

end

