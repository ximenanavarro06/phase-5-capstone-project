class DietsController < ApplicationController

    def index
        diets = Diet.all
        render json: diets
    end

    def show
        diet = set_diet
        render json: diet
    end

    def update
        diet = set_diet
        diet.update!(diet_params)
        render json: diet
    end

    private

    def set_diet
        Diet.find(params[:id])
    end

    def diet_params
        params.permit(:diet_name,
            :sunday_breakfast, :sunday_lunch, :sunday_dinner, :sunday_snacks,
            :monday_breakfast, :monday_lunch, :monday_dinner, :monday_snacks,
            :tuesday_breakfast, :tuesday_lunch, :tuesday_dinner, :tuesday_snacks,
            :wednesday_breakfast, :wednesday_lunch, :wednesday_dinner, :wednesday_snacks,
            :thursday_breakfast, :thursday_lunch, :thursday_dinner, :thursday_snacks,
            :friday_breakfast, :friday_lunch, :friday_dinner, :friday_snacks,
            :saturday_breakfast, :saturday_lunch, :saturday_dinner, :saturday_snacks,
            :on_profile
        )
    end
end
