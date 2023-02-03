class WorkoutWithMovementSerializer < ActiveModel::Serializer
  attributes :id
  has_one :workout
  has_one :movement
end
