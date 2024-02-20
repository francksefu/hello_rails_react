class MessagesController < ApplicationController

  def index
  end

  def greeting
    @message = Message.all[0 + Random.rand(5)]
    render json:@message
  end
end
