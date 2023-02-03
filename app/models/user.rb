class User < ApplicationRecord
    has_many :workouts
    has_one :diet
end
