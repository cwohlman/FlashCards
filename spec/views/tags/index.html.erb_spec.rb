require 'spec_helper'

describe "tags/index" do
  before(:each) do
    assign(:tags, [
      stub_model(Tag,
        :question_id => 1,
        :tagname => "Tagname"
      ),
      stub_model(Tag,
        :question_id => 1,
        :tagname => "Tagname"
      )
    ])
  end

  it "renders a list of tags" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Tagname".to_s, :count => 2
  end
end
