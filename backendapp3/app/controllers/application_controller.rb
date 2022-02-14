class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  def current_user
    User.find(2)
  end
end