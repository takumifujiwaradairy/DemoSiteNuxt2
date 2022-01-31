class Api::V1::LikesController < ApplicationController

  def update
  end

  private
  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:like)
  end
end
