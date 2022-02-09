class ChangeColumnDefaultToArticles < ActiveRecord::Migration[6.1]
  def change
    change_column_default :articles, :like, from: nil, to: "0"
  end
end
