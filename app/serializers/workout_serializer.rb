class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :on_profile
  has_many :movements
end
