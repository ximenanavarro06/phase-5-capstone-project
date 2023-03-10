class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :profile_pic
      t.string :username
      t.string :password_digest
      t.integer :height
      t.integer :weight
      t.integer :weight_goal
      t.string :gender
      t.string :fitness_goal
      t.string :health_goal

      t.timestamps
    end
  end
end
