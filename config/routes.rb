Todoly::Application.routes.draw do
  root 'todos#index'

  resources :todos, only: [:index]
end
