require 'spec_helper'

describe LearnController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'nextQuestion'" do
    it "returns http success" do
      get 'nextQuestion'
      response.should be_success
    end
  end

  describe "GET 'saveQuestion'" do
    it "returns http success" do
      get 'saveQuestion'
      response.should be_success
    end
  end

end
