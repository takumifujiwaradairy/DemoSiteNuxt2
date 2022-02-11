class Like < ApplicationRecord
  belongs_to :user
  belongs_to :article
  # Userは1つのAritcleに対して１つしかLikeを作成できないようにする。
end