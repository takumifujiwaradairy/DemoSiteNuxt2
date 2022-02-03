class Api::V1::LikesController < ApplicationController
  def update
    article = Article.find(params[:id])
    article.like += 1
    if article.save
      render json: { status: 'success', message: 'updated Sumlikes', data: article }
    else    
      render json: { status: 'success', message: 'not updated', data: article.errors }
    end
  end
end
