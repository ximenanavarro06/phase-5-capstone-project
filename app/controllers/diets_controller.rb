class DietsController < ApplicationController

    def index
        diets = Diet.all
        render json: diets
    end

    def show
        diet = set_diet
        render json: diet
    end

    private

    def set_diet
        Diet.find(params[:id])
    end
end
