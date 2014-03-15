# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


window.setupQuestions = (answers) =>
	question = answers[0]
	answeredCorrectly = true
	onAnswer = (x) =>
		$('.answers .well').removeClass('error')
		if x.data == question.answer_text
			$(x.target).addClass("success")
			window.loadNextQuestion(question, answeredCorrectly)
		else
			answeredCorrectly = false
			$(x.target).addClass("error")

	answerElements = answers.map((a) => 
		return $('<div>').addClass('col-sm-4').text(a.answer_text).click(a.answer_text, onAnswer).wrapInner('<div class="well">');
	)
	$('.question').text(question.question_text)
	$('.answers').empty().append(answerElements)

window.loadNextQuestion = (question, success) =>
	# TODO: save answered state
	# TODO: use multiple deferreds to ensure success message lasts for at least 250 ms
	$.ajax({
		url: "nextQuestion.json",
		success: window.setupQuestions
	});