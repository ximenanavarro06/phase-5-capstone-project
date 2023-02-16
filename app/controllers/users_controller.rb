class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def show
        user = set_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def update
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        @current_user.destroy
        head :no_content
    end

    private

    def set_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:profile_pic, :username, :password, :password_confirmation, :height, :weight, :weight_goal, :height_goal, :gender, :fitness_goal, :health_goal)
    end
end
