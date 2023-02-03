class WorkoutWithMovementsController < ApplicationController

    def create
        workout_with_movements = WorkoutWithMovements.create!(params_movement)
        render json: workout_with_movements.movement, status: :created
    end

    private

    def params_movement
        params.permit(:name, :reps, :sets)
    end
end
