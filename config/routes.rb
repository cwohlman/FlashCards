FlexCards::Application.routes.draw do
  resources :tags

  resources :questions

  root "pages#home"    
  get "home", to: "pages#home", as: "home"
  get "inside", to: "pages#inside", as: "inside"
  get "learn", to: "pages#learn", as: "learn"
    
  devise_for :users
  
  namespace :admin do
    root "base#index"
    resources :users
  end
  
end
