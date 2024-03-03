class StaticPagesController < ApplicationController
  def index
    render json: { message: "hallo world" }
  end
end
