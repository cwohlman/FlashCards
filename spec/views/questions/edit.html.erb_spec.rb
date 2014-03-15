require 'spec_helper'

describe "questions/edit" do
  before(:each) do
    @question = assign(:question, stub_model(Question,
      :user_id => 1,
      :question_text => "MyString",
      :answer_text => "MyString",
      :picture_url => "MyString",
      :audio_url => "MyString",
      :video_url => "MyString",
      :category => "MyString",
      :user_difficulty => "MyString"
    ))
  end

  it "renders the edit question form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", question_path(@question), "post" do
      assert_select "input#question_user_id[name=?]", "question[user_id]"
      assert_select "input#question_question_text[name=?]", "question[question_text]"
      assert_select "input#question_answer_text[name=?]", "question[answer_text]"
      assert_select "input#question_picture_url[name=?]", "question[picture_url]"
      assert_select "input#question_audio_url[name=?]", "question[audio_url]"
      assert_select "input#question_video_url[name=?]", "question[video_url]"
      assert_select "input#question_category[name=?]", "question[category]"
      assert_select "input#question_user_difficulty[name=?]", "question[user_difficulty]"
    end
  end
end
