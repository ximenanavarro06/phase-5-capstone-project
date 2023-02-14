class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all
        render json: workouts
    end

    def show
        workout = set_workout
        render json: workout
    end

    def update
        workout = set_workout
        workout.update!(workout_params)
        render json: workout
    end

    private

    def set_workout
        Workout.find(params[:id])
    end

    def workout_params
        params.permit(:name, :on_profile)
    end
end
