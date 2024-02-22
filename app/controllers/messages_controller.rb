class MessagesController < ApplicationController
  def index; end

  def greeting
    @message = Message.all[Random.rand(0..4)]
    render json: @message
  end
end
