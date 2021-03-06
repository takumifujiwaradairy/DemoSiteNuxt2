class Api::V1::LikesController < ApplicationController

  def create
    # paramsを利用してLikeにuser_idとarticle_idに該当記事とユーザーのIdを入れる。
    like = current_user.likes.build(likes_params)
    if like.save
      # 該当記事のLikeの総数をカウントする
      # 書き方その１
      # likes_count = Like.where(likes_params).count
      # 書き方その2
      # 合計値を返す
      likes_count = Article.find(likes_params[:article_id]).likes.count
      render json: { status: 'success', message: 'success like', data: likes_count }
    else    
      render json: { status: 'success', message: 'not updated like', data: like.errors }, status: 400
    end
  end

  def destroy
    # likeという変数の中にcrrent_userのlikesの投稿の中からarticle_idが一致した物を入れる。
    like = current_user.likes.find_by(article_id: params[:id])
    # 成功したら削除できましたとレスポンスを返す。
    if like.destroy
      # 削除した後にLIKEの対象のArticleをカウントする
      likes_count = Like.where(article_id: params[:id]).count
      render json: { status: 'SUCCESS', message: 'Deleted the Likes', data: likes_count }
    end
  end

  private
  def likes_params
    # paramsの中から必要な情報を取得する。
    params.require(:like).permit(:article_id)
  end
end
