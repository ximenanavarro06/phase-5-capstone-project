class WorkoutWithMovementsController < ApplicationController


    def index
        workout_with_movements = WorkoutWithMovement.all
        render json: workout_with_movements
    end

    def show
        workout_with_movements = set_wm
        render json: workout_with_movements
    end

    private

    def set_wm
        WorkoutWithMovement.find(params[:id])
    end

end
