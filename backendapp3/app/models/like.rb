class Like < ApplicationRecord
  belongs_to :user
  belongs_to :article
  # Userは1つのAritcleに対して１つしかLikeを作成できないようにする。
  validates_uniqueness_of :article_id, scope: :user_id
end