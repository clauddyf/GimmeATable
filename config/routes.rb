Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api, defaults: {format: :json} do 
  #   resources :users, only: [:create]
  #   resource :session, only: [:create, :destroy, :show]
  #   resources :restaurants, only: [:index, :show]
  #   resources :locations, only: [:index,:show]
  # end

  namespace :api, defaults: {format: :json} do 
    resources :locations, only: [:index] do
      resources :restaurants, only: :index
    end
    resources :locations, only: :show
    resources :restaurants, only: :show
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
