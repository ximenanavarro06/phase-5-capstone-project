Rails.application.routes.draw do
  resources :workout_with_movements, only: [:index, :show, :create]
  resources :diets, only: [:index, :show]
  resources :movement_how_tos, only: [:show]
  resources :workouts, only: [:index, :show]
  resources :movements, only: [:index, :show]
  resources :users, only: [:show, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/me", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  patch "/me", to: "users#update"
end
