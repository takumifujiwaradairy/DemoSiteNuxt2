class Api::V1::LikesController < ApplicationController

  def create
    # paramsを利用してLikeにuser_idとarticle_idに該当記事とユーザーのIdを入れる。
    like = current_user.likes.build(likes_params)
    if like.save
      # 成功したら作成したらLikeをしたAricleのLikeの合計をレスポンスに返す。 
      # likes_count = Like.where(likes_params).count
      likes_count  = Article.where(id: likes_params[:article_id]).new.likes.count
      render json: { status: 'success', message: 'success like', data: likes_count }
    else    
      render json: { status: 'success', message: 'not updated like', data: like.errors }
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
