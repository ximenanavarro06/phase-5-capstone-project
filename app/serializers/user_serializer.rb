class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :height, :weight, :weight_goal, :gender, :fitness_goal, :health_goal
end
