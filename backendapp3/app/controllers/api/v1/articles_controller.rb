class Api::V1::ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]
  
    def index
      # ログインしているUserのLikeテーブルの配列(A)を作成する。
      like_article_ids = current_user.likes.pluck(:article_id)
      # 記事の配列をまわして仮想属性に値を入れるようにする。
      articles = Article.all.map do |article|
        article.is_like = article.id.in?(like_article_ids)
        article.likes_count = article.likes.count
        article
      end
      # article取得のタイミングでカウントメソッドも共に送信するようにする
      render json: { status: 'SUCCESS', message: 'Loaded articles', data: articles.to_json(methods: [:likes_count, :is_like]) }
    end
  
    def show
      render json: { status: 'SUCCESS', message: 'Loaded the articles', data: @article }
    end
  
    def create
      article = Article.new(article_params)
      article.user_id = current_user.id
      if article.save
        # 作成した記事と共にlikesのカウントを送信
        render json: { status: 'SUCCESS', data: article.to_json(methods: :likes_count) }
      else
        render json: { status: 'ERROR', data: article.errors }
      end
    end
  
    def destroy
      @article.destroy
      render json: { status: 'SUCCESS', message: 'Deleted the article', data: @article }
    end
  
    def update
      if @article.update(article_params)
        render json: { status: 'SUCCESS', message: 'Updated the article', data: @article }
      else
        render json: { status: 'SUCCESS', message: 'Not updated', data: @article.errors }
      end
    end
  
    private
    def set_article
      @article = Article.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :content, :like)
    end

end
