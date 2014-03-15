class LearnController < ApplicationController
  def index
  	render "nextQuestion"
  end

  def nextQuestion
  	@answers = Question.limit(6)
  	@question = @answers.first
  end

  def saveQuestion
  end
end
