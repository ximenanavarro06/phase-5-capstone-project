class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_pic, :username, :password_digest, :height, :weight, :weight_goal, :gender, :fitness_goal, :health_goal
end
