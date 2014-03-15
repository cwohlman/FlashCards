class Tag < ActiveRecord::Base
	belongs_to :question
	validates :question_id, presence: true
	validates :tagname, presence: true
end
