class UsersController < ApplicationController

    def show
        user = set_user
        render json: user
    end

    private

    def set_user
        User.find(params[:id])
    end
end
