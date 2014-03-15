json.array!(@questions) do |question|
  json.extract! question, :id, :user_id, :question_text, :answer_text, :picture_url, :audio_url, :video_url, :category, :user_difficulty
  json.url question_url(question, format: :json)
end
