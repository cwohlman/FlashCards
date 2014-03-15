module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | FlexCards"      
    end
  end
end
