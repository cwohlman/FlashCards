# Generated with RailsBricks
# Initial seed file to use with Devise User Model

# Temporary admin account
u = User.new(
    username: "admin",
    email: "admin@example.com",
    password: "1234",
    password_confirmation: "1234",
    admin: true
)
u.skip_confirmation!
u.save!



# Test user accounts
(1..5).each do |i|
  u = User.new(
      username: "user#{i}",
      email: "user#{i}@example.com",
      password: "1234",
      password_confirmation: "1234"
  )
  u.skip_confirmation!
  u.save!

  puts "#{i} test users created..." if (i % 5 == 0)

end
  
(1..100).each do |i|
  q = Question.new(
      question_text: "What is the answer to #{i}",
      answer_text: "The answer is #{i}",
      category: "cat#{i % 5}"
    )
  q.save
  (1..5).each do |t|
    q.tags.create(
        tagname: "tag#{t}"
      )
  end
  puts "#{i} test questions created..." if (i % 100 == 0)
  puts "#{i * 5} test tags created..." if (i % 100 == 0)

end