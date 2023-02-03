class Movement < ApplicationRecord
  has_one :movement_how_to
  has_many :workout_with_movements
  has_many :workouts, through: :workout_with_movements
end
