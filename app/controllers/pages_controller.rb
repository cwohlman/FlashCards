class PagesController < ApplicationController
  before_action :authenticate_user!, only: [
    :inside,
    :learn
  ]

  def home
  end
  
  def inside
  end 
   
  def learn
  	@answers = Question.limit(6)
  	@question = @answers.first
  end
end
