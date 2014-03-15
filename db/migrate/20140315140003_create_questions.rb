class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.string :question_text
      t.string :answer_text
      t.string :picture_url
      t.string :audio_url
      t.string :video_url
      t.string :category
      t.string :user_difficulty

      t.timestamps
    end
  end
end
