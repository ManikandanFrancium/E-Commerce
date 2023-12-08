Rails.application.routes.draw do
  devise_for :users
  # devise_for :users, controllers: { sessions: 'users/sessions' }
  # resources :portfolios, except: [:show]
  # get 'angular-items', to: 'portfolios#angular'
  # get 'portfolio/id', to: 'portfolios#show', as: 'portfolio_show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root to: 'contacts#show'
  resources :products
  # resources :companydetails do
  #   collection do
  #     get 'contact'
  #     get 'about'
  #   end
  # end

  # get 'contact', to: 'companydetails#contact'
  get 'about', to: 'companydetails#about'
  get 'contact', to: 'contacts#show'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
