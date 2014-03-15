require 'spec_helper'

describe "questions/index" do
  before(:each) do
    assign(:questions, [
      stub_model(Question,
        :user_id => 1,
        :question_text => "Question Text",
        :answer_text => "Answer Text",
        :picture_url => "Picture Url",
        :audio_url => "Audio Url",
        :video_url => "Video Url",
        :category => "Category",
        :user_difficulty => "User Difficulty"
      ),
      stub_model(Question,
        :user_id => 1,
        :question_text => "Question Text",
        :answer_text => "Answer Text",
        :picture_url => "Picture Url",
        :audio_url => "Audio Url",
        :video_url => "Video Url",
        :category => "Category",
        :user_difficulty => "User Difficulty"
      )
    ])
  end

  it "renders a list of questions" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Question Text".to_s, :count => 2
    assert_select "tr>td", :text => "Answer Text".to_s, :count => 2
    assert_select "tr>td", :text => "Picture Url".to_s, :count => 2
    assert_select "tr>td", :text => "Audio Url".to_s, :count => 2
    assert_select "tr>td", :text => "Video Url".to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
    assert_select "tr>td", :text => "User Difficulty".to_s, :count => 2
  end
end
