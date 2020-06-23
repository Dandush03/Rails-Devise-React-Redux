Rails.application.routes.draw do
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
  namespace :api, defaults: { format: 'json' } do
    devise_for :users
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
