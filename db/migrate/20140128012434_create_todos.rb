class CreateTodos < ActiveRecord::Migration
  def change
  	drop_table :todos
    create_table :todos do |t|
    	t.string :todo, null: false
    	t.boolean :incomplete, default: true

    	t.timestamps
    end
  end
end
