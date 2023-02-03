class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all
        render json: workouts
    end

    def show
        workout = set_workout
        render json: workout
    end

    private

    def set_workout
        Workout.find(params[:id])
    end
end
