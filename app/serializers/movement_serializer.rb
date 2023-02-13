class MovementSerializer < ActiveModel::Serializer
  attributes :id, :name, :reps, :sets
  has_one :movement_how_to
end
