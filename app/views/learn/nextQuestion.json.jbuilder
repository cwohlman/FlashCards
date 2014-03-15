json.array!(@answers) do |answer|
	json.extract! answer, :question_text, :answer_text, :picture_url, :audio_url, :video_url
end