class TodosController < ApplicationController

	def index
		@todo = Todo.all.order(:id)
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
		@todo = Todo.find(params[:id])
		if @todo.update_attributes(todo_params)
			respond_to do |format|
				format.html {render nothing: true}
				format.json {render json: @todo, status: 201}
			end
		end
	end
	def destroy
		@todo = Todo.find(params[:id])
		if @todo.destroy
			respond_to do |format|
				format.html {render nothing: true}
				format.json {render json: "gone baby gone", status: 201}
			end
		end
	end

	private
	def todo_params
		params.permit(:todo,:incomplete,:id,:created_at,:updated_at);
	end

end

