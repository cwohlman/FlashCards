class Question < ActiveRecord::Base
	has_many :tags
	has_many :answers
end
