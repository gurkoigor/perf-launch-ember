class Api::V1::ServersController < ApplicationController

  def index
    # render json: Server.all
    render json: [Server.new(url: 'localhost:8012')]
  end

end
