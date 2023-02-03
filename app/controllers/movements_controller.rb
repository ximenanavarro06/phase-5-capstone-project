class MovementsController < ApplicationController

    def index
        movements = Movement.all
        render json: movements
    end

    def show
        movement = set_movement
        render json: movement
    end

    private

    def set_movement
        Movement.find(params[:id])
    end
end
