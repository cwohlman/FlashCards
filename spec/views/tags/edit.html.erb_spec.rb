require 'spec_helper'

describe "tags/edit" do
  before(:each) do
    @tag = assign(:tag, stub_model(Tag,
      :question_id => 1,
      :tagname => "MyString"
    ))
  end

  it "renders the edit tag form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", tag_path(@tag), "post" do
      assert_select "input#tag_question_id[name=?]", "tag[question_id]"
      assert_select "input#tag_tagname[name=?]", "tag[tagname]"
    end
  end
end
