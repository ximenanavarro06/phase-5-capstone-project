class Workout < ApplicationRecord
  has_many :workout_with_movements
  has_many :movements, through: :workout_with_movements
end
