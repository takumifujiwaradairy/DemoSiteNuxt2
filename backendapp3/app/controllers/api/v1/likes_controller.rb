class Api::V1::LikesController < ApplicationController
  
  def create
    # paramsを利用してLikeにuser_idとarticle_idに該当記事とユーザーのIdを入れる。
    # 成功したら作成したLikeをレスポンスに返す。
    like = current_user.likes.build(likes_params)
    if like.save
      render json: { status: 'success', message: 'success like', data: like }
    else    
      render json: { status: 'success', message: 'not updated like', data: like.errors }
    end
  end

  def delete
    # paramsを利用してLikeを削除する。
    # 成功したら削除できましたとレスポンスを返す。
  end

  private
  def likes_params
    params.require(:like).permit(:article_id)
    # paramsの中から必要な情報を取得する。
    #削除ようにLike.idを取得できるように変更する。
  end
end
