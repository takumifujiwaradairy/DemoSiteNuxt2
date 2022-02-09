class Api::V1::LikesController < ApplicationController
  def index 
    likes = Like.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded likes', data: likes }
  end
  
  def create
    binding.pry
    # like = current_user.likes.create!(likes_params)
   ra
    if like.save
      render json: { status: 'success', message: 'Success like', data: like }
    else    
      render json: { status: 'success', message: 'not updated like', data: like.errors }
    end
  end

  def destroy
    User.first.likes.find(params[:id]).destroy!
  end

  private

  def set_like
    @like = Like.find(params[:id])
  end
end
