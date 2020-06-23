# frozen_string_literal: true

# rubocop: disable Style/ClassAndModuleChildren

# Sessions Override
class Api::SessionsController < Devise::SessionsController
  prepend_before_action :require_no_authentication, only: [:create]

  def create
    resource = User.find_for_database_authentication(username: params[:user])
    puts resource
    return invalid_login_attempt unless resource
    if resource.valid_password?(params[:password])
      sign_in('user', resource)
      render json: { success: true, auth_token: resource.authenticatable_salt, username: resource.username }
      return
    end
    invalid_login_attempt
  end

  protected

  def ensure_params_exist
    return unless params[:user_login].blank?

    render json: { success: false, message: 'missing user_login parameter' }, status: 422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render json: { success: false, message: 'Error with your login or password' }, status: 401
  end
end
# rubocop: enable Style/ClassAndModuleChildren
