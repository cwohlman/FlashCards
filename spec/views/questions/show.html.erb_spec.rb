require 'spec_helper'

describe "questions/show" do
  before(:each) do
    @question = assign(:question, stub_model(Question,
      :user_id => 1,
      :question_text => "Question Text",
      :answer_text => "Answer Text",
      :picture_url => "Picture Url",
      :audio_url => "Audio Url",
      :video_url => "Video Url",
      :category => "Category",
      :user_difficulty => "User Difficulty"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Question Text/)
    rendered.should match(/Answer Text/)
    rendered.should match(/Picture Url/)
    rendered.should match(/Audio Url/)
    rendered.should match(/Video Url/)
    rendered.should match(/Category/)
    rendered.should match(/User Difficulty/)
  end
end
