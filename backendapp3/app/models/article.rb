class Article < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
  # カラムに存在しない仮想の属性を持たせる
  attr_accessor :is_like, :likes_count
  # articleごとにlikeをカウントするメソッドの作成
  # def likes_count
  #   self.likes.count
  # end

end