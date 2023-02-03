class MovementHowTosController < ApplicationController

    def show
        movement_how_to = set_movement_how_to
        render json: movement_how_to
    end

    private

    def set_movement_how_to
        MovementHowTo.find(params[:id])
    end
end
