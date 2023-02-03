Rails.application.routes.draw do
  resources :workout_with_movements, only: [:create]
  resources :diets, only: [:index, :show]
  resources :movement_how_tos, only: [:show]
  resources :workouts, only: [:index, :show]
  resources :movements, only: [:index, :show]
  resources :users, only: [:show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
