FlexCards::Application.routes.draw do
  get "learn/index"
  get "learn/nextQuestion"
  get "learn/saveQuestion"
  resources :tags
  resources :learn
  resources :questions

  root "pages#home"    
  get "home", to: "pages#home", as: "home"
  get "inside", to: "pages#inside", as: "inside"
  
    
  devise_for :users
  
  namespace :admin do
    root "base#index"
    resources :users
  end
  
end
