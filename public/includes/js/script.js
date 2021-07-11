let httpRequests = new HttpRequests()
let intermixStagiairsQuestions = new IntermixStagiairsQuestions( httpRequests )

console.log( '%cNieuwsgierig hmm? Goedzo :)', 'font-size: 24px; font-family: sans-serif; line-height: 36px;' )
console.log( '%cHet antwoord op de bonusvraag is: \'het woord\'.', 'font-size: 24px; font-family: sans-serif; line-height: 36px;' )

window.addEventListener( 'DOMContentLoaded', () => {

    // Start the project
    const nameField = document.getElementById( 'name' )

    const progressBar = document.getElementById( 'completed' )

    const questionHolder = document.getElementById( 'question-holder' )
    const questionHolderTitle = document.getElementById( 'question-holder-title' )
    const questionHolderOptions = document.getElementById( 'question-holder-options' )
    const answerHolder = document.getElementById( 'answer-holder' )
    const noteText = document.getElementById( 'note-text' )
    const nextButton = document.getElementById( 'next-button' )

    intermixStagiairsQuestions.progressBar = progressBar

    intermixStagiairsQuestions.nameField = nameField
    intermixStagiairsQuestions.questionHolder = questionHolder
    intermixStagiairsQuestions.questionHolderTitle = questionHolderTitle
    intermixStagiairsQuestions.questionHolderOptions = questionHolderOptions
    intermixStagiairsQuestions.answerHolder = answerHolder
    intermixStagiairsQuestions.noteText = noteText
    intermixStagiairsQuestions.button = nextButton

    intermixStagiairsQuestions.addNameFieldEventListener()
    intermixStagiairsQuestions.addButtonEventListener()

    intermixStagiairsQuestions.setProgress()
    intermixStagiairsQuestions.setQuestion()

    intermixStagiairsQuestions.loadAnswers()

} )
