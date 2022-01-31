class Api::V1::LikesController < ApplicationController
  def update
    @article = Article.find(params[:id])
    if @article.update(like: params[:like]+=1)
      render json: { status: 'success', message: 'updated the article', data: @article }
    else    
        render json: { status: 'success', message: 'not updated', data: @article.errors }
    end
  end
end
