json.array!(@tags) do |tag|
  json.extract! tag, :id, :question_id, :tagname
  json.url tag_url(tag, format: :json)
end
