class Api::V1::LikesController < ApplicationController
  
  def create
    # paramsを利用してLikeにuser_idとarticle_idに該当記事とユーザーのIdを入れる。
    # 成功したら作成したLikeをレスポンスに返す。
    like = current_user.likes.new(likes_params)
    if like.save
      render json: { status: 'success', message: 'success like', data: like }
    else    
      render json: { status: 'success', message: 'not updated like', data: like.errors }
    end
  end

  def destroy
    # paramsを利用して該当するuser_idとarticle_idのLikeを削除する。
    current_user.likes.find(params[:id]).destroy!
  end

  private
  def likes_params
    params.require(:like).permit(:article_id)
    # paramsの中から必要な情報を取得する。
  end
end
