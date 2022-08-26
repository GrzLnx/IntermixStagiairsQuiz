class IntermixStagiairsQuestions {

    _version = 5

    _startTime = Date

    _nameField = HTMLInputElement
    _questionHolder = HTMLElement
    _questionHolderTitle = HTMLElement
    _questionHolderOptions = HTMLElement
    _answerHolder = HTMLElement
    _noteText = HTMLElement
    _button = HTMLElement

    _progressBar = HTMLElement
    _progress = 0

    _questions = [
        {
            id : 1,
            question_type : 'name',
            question_title : 'Vul je naam hierboven in',
            question_name : 'name',
            question_placeholder : '',
            question_options : [],
            question_answers : []
        },
        {
            id : 2,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw HTML skills geven?',
            question_name : 'html_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value: 1,
                description: ''
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: ''
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: ''
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: ''
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: ''
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: ''
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: ''
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: ''
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: ''
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: ''
            } ]
        },
        {
            id : 3,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw CSS skills geven?',
            question_name : 'css_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value: 1,
                description: ''
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: ''
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: ''
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: ''
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: ''
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: ''
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: ''
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: ''
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: ''
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: ''
            } ]
        },
        {
            id : 4,
            question_type : 'options',
            question_title : 'Heb je wel eens BEM ( block, element, modifier ) gebruikt?',
            question_name : 'used_bem',
            question_placeholder : '',
            question_options : [],
            question_answers : [
                {
                    id : 1,
                    text : 'Ja',
                    value : 1
                },
                {
                    id : 2,
                    text : 'Nee',
                    value : 0
                }
            ]
        },
        {
            id : 5,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw Javscript skills geven?',
            question_name : 'js_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value: 1,
                description: ''
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: ''
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: ''
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: ''
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: ''
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: ''
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: ''
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: ''
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: ''
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: ''
            } ]
        },
        {
            id : 6,
            question_type : 'options',
            question_title : 'Heb je wel eens Vue.js gebruikt?',
            question_name : 'used_vue',
            question_placeholder : '',
            question_options : [],
            question_answers : [
                {
                    id : 1,
                    text : 'Ja',
                    value : 1
                },
                {
                    id : 2,
                    text : 'Nee',
                    value : 0
                }
            ]
        },
        {
            id : 7,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw PHP skills geven?',
            question_name : 'php_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value: 1,
                description: ''
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: ''
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: ''
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: ''
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: ''
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: ''
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: ''
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: ''
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: ''
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: ''
            } ]
        },
        {
            id : 8,
            question_type : 'options',
            question_title : 'Heb je wel eens Laravel gebruikt?',
            question_name : 'used_larvel',
            question_placeholder : '',
            question_options : [],
            question_answers : [
                {
                    id : 1,
                    text : 'Ja',
                    value : 1
                },
                {
                    id : 2,
                    text : 'Nee',
                    value : 0
                }
            ]
        },
        {
            id : 9,
            question_type : 'textarea',
            question_title : 'Wat wil / verwacht je hier ( te ) leren?',
            question_name : 'expectations',
            question_placeholder : 'Wat je hier verwacht / wilt ( te ) leren...',
            question_options : [],
            question_answers : []
        },
        {
            id : 10,
            question_type : 'input',
            question_title : 'Bonusvraag',
            question_name : 'bonus',
            question_placeholder : 'Vul hier het woord in...',
            question_options : [],
            question_answers : []
        },
        {
            id : 11,
            question_type : 'options',
            question_title : 'Is <span><p>tekst</p></span> valide HTML?',
            question_name : 'valid_html',
            question_placeholder : '',
            question_options : [],
            question_answers : [
                {
                    id : 1,
                    text : 'Ja',
                    value : 1
                },
                {
                    id : 2,
                    text : 'Nee',
                    value : 0
                }
            ]
        },
        {
            id : 12,
            question_type : 'options',
            question_title : 'Welke kleur wordt de tekst?',
            question_name : 'text_color',
            question_placeholder : '',
            question_options : [
                {
                    id : 1,
                    content : '<div class="text-holder">\n' +
                              '  <p class="text" id="text">Tekst</p>\n' +
                              '</div>'
                },
                {
                    id : 2,
                    content: '#text { color: red; }\n' +
                             '.text-holder > p { color: blue; }\n' +
                             'div p.text { color: yellow; }\n' +
                             'div span#text { color: green; }'
                }
            ],
            question_answers : [
                {
                    id : 1,
                    text : 'Rood',
                    value : 'red'
                },
                {
                    id : 2,
                    text : 'Blauw',
                    value : 'blue'
                },
                {
                    id : 3,
                    text : 'Geel',
                    value : 'yellow'
                },
                {
                    id : 4,
                    text : 'Groen',
                    value : 'green'
                }
            ]
        },
        {
            id : 13,
            question_type : 'options',
            question_title : 'Wat returnen de console.logs?',
            question_name : 'text_color',
            question_placeholder : '',
            question_options : [
                {
                    id : 1,
                    content :
                        'const object = {\n' +
                        '   foo: "bar",\n\n' +
                        '   log: function() {\n' +
                        '      const self = this;\n\n' +
                        '        console.log("outer log:  this.foo = " + this.foo);\n' +
                        '        console.log("outer log:  self.foo = " + self.foo);\n\n' +
                        '        (function() {\n' +
                        '            console.log("inner log:  this.foo = " + this.foo);\n' +
                        '            console.log("inner log:  self.foo = " + self.foo);\n' +
                        '        }());\n' +
                        '    }\n' +
                        '};\n\n' +
                        'object.log();\n'
                },
                {
                    id : 2,
                    content: 'A: Allemaal "bar"\n' +
                        'B: 3 bar en 1 "undefined"\n' +
                        'C: Allemaal "undefined"\n' +
                        'D: Een error'
                }
            ],
            question_answers : [
                {
                    id : 1,
                    text : 'A',
                    value : 'allCorrect'
                },
                {
                    id : 2,
                    text : 'B',
                    value : 'halfCorrect'
                },
                {
                    id : 3,
                    text : 'C',
                    value : 'allIncorrect'
                },
                {
                    id : 4,
                    text : 'D',
                    value : 'Error'
                }
            ]
        },
    ]
    _currentQuestion = 0
    _answers = []

    _localstorageData = {}

    _httpRequestsClass = httpRequests

    constructor( httpRequests ) {

        this.httpRequestsClass = httpRequests
        this.startTime = Date.now()

    }

    get startTime() {
        return this._startTime;
    }

    set startTime(value) {
        this._startTime = value;
    }

    get version() {
        return this._version;
    }

    set version(value) {
        this._version = value;
    }

    get nameField() {
        return this._nameField;
    }

    set nameField(value) {
        this._nameField = value;
    }

    get questionHolder() {
        return this._questionHolder;
    }

    set questionHolder(value) {
        this._questionHolder = value;
    }

    get questionHolderTitle() {
        return this._questionHolderTitle;
    }

    set questionHolderTitle(value) {
        this._questionHolderTitle = value;
    }

    get questionHolderOptions() {
        return this._questionHolderOptions;
    }

    set questionHolderOptions(value) {
        this._questionHolderOptions = value;
    }

    get answerHolder() {
        return this._answerHolder;
    }

    set answerHolder(value) {
        this._answerHolder = value;
    }

    get noteText() {
        return this._noteText;
    }

    set noteText(value) {
        this._noteText = value;
    }

    get button() {
        return this._button;
    }

    set button(value) {
        this._button = value;
    }

    get progressBar() {
        return this._progressBar;
    }

    set progressBar(value) {
        this._progressBar = value;
    }

    get progress() {
        return this._progress;
    }

    set progress(value) {
        this._progress = value;
    }

    get questions() {
        return this._questions;
    }

    set questions(value) {
        this._questions = value;
    }

    get currentQuestion() {
        return this._currentQuestion;
    }

    set currentQuestion(value) {
        this._currentQuestion = value;
    }

    get answers() {
        return this._answers;
    }

    set answers(value) {
        this._answers = value;
    }

    get localstorageData() {
        return this._localstorageData;
    }

    set localstorageData(value) {
        this._localstorageData = value;
    }

    get httpRequestsClass() {
        return this._httpRequestsClass;
    }

    set httpRequestsClass(value) {
        this._httpRequestsClass = value;
    }

    addNameFieldEventListener() {

        this.nameField.addEventListener( 'keyup', () => {

            if( this.currentQuestion === 0 ) {
                if( this.nameField.value !== '' ) {
                    this.button.disabled = ''
                    let questionData = this.questions[ this.currentQuestion ]
                    let answer = {
                        id : questionData.id,
                        question_name : questionData.question_name,
                        question_title : questionData.question_title,
                        question_type : questionData.question_type,
                        question_answer : this.nameField.value
                    }
                    this.storeAnswerInDatabase( answer )
                } else {
                    this.button.disabled = 'disabled'
                }
            }

        } )

    }

    addButtonEventListener() {

        this.button.addEventListener( 'click', () => {
            this.nextQuestion()
        } )

    }

    setProgress() {
        this.progress = 100 / ( this.questions.length / this.currentQuestion )
        this.progressBar.value = this.progress
    }

    setQuestion( answer = {} ) {

        let questionDetails = this.questions[ this.currentQuestion ]

        document.title = 'Vraag ' + questionDetails.id + ' - Intermix Stagiairs Quiz'

        this.questionHolderTitle.innerText = questionDetails.question_title

        this.clearAnswerHolder()
        this.noteText.innerText = ''

        if( questionDetails.question_type === 'rating' ) {

            let ratingHolder = document.createElement( 'div' )
            ratingHolder.classList.add( 'rating-holder' )
            for( let ratingItem of questionDetails.question_answers ) {
                let ratingButton = document.createElement( 'button' )
                ratingButton.value = ratingItem.value
                ratingButton.innerText = ratingItem.text
                ratingButton.classList.add( 'rating-button' )
                ratingButton.addEventListener( 'click', () => {
                    let activeRatingButton = document.querySelector( '.rating-button--active' )
                    if( activeRatingButton ) {
                        activeRatingButton.classList.remove( 'rating-button--active' )
                    }

                    let questionData = this.questions[ this.currentQuestion ]
                    let answer = {
                        id : questionData.id,
                        question_name : questionData.question_name,
                        question_title : questionData.question_title,
                        question_type : questionData.question_type,
                        question_answer : ratingItem.value
                    }
                    this.storeAnswerInDatabase( answer )

                    ratingButton.classList.add( 'rating-button--active' )
                    this.noteText.innerText = ratingItem.description
                    if( ratingItem.description === 'Dit antwoord is fout.' ) {
                        this.button.disabled = 'disabled'
                    } else {
                        this.button.disabled = ''
                    }
                } )
                ratingHolder.appendChild( ratingButton )
            }
            this.answerHolder.appendChild( ratingHolder )
        }

        if( questionDetails.question_type === 'input' ) {

            let inputField = document.createElement( 'input' )
            inputField.name = questionDetails.question_name
            inputField.type = 'text'
            inputField.placeholder = questionDetails.question_placeholder

            inputField.addEventListener( 'keyup', () => {

                if( inputField.value !== '' ) {
                    this.button.disabled = ''

                    if( inputField.value.length % 5 === 0 ) {
                        let questionData = this.questions[ this.currentQuestion ]
                        let answer = {
                            id : questionData.id,
                            question_name : questionData.question_name,
                            question_title : questionData.question_title,
                            question_type : questionData.question_type,
                            question_answer : inputField.value
                        }
                        this.storeAnswerInDatabase( answer )
                    }

                } else {
                    this.button.disabled = 'disabled'
                }

            } )

            this.answerHolder.appendChild( inputField )

        }

        if( questionDetails.question_type === 'options' ) {

            let optionsHolder = document.createElement( 'div' )
            if( questionDetails.question_options.length !== 0 ) {
                optionsHolder.classList.add( 'options-holder' )
                for( let optionOption of questionDetails.question_options ) {
                    let option = document.createElement( 'div' )
                    option.innerText = optionOption.content
                    optionsHolder.appendChild( option )
                }
            }

            let optionsAnswerHolder = document.createElement( 'div' )
            optionsAnswerHolder.classList.add( 'options-answer-holder' )
            for( let optionAnswer of questionDetails.question_answers ) {
                let label = document.createElement( 'label' )
                label.innerText = optionAnswer.text
                label.addEventListener( 'click', ( event ) => {

                    event.stopPropagation()
                    event.preventDefault()
                    this.button.disabled = ''

                    let questionData = this.questions[ this.currentQuestion ]
                    let answer = {
                        id : questionData.id,
                        question_name : questionData.question_name,
                        question_title : questionData.question_title,
                        question_type : questionData.question_type,
                        question_answer : optionAnswer.value
                    }
                    this.storeAnswerInDatabase( answer )

                    let activeOption = document.querySelector( '.active' )
                    if( activeOption ) {
                        activeOption.classList.remove( 'active' )
                    }
                    label.classList.add( 'active' )
                } )
                let option = document.createElement( 'input' )
                option.type = 'radio'
                option.name = questionDetails.question_name
                option.value = optionAnswer.value
                label.appendChild( option )
                optionsAnswerHolder.appendChild( label )
            }

            if( questionDetails.question_options.length !== 0 ) {
                this.answerHolder.appendChild( optionsHolder )
            }
            this.answerHolder.appendChild( optionsAnswerHolder )

        }

        if( questionDetails.question_type === 'textarea' ) {

            let textarea = document.createElement( 'textarea' )
            textarea.name = questionDetails.question_name
            textarea.placeholder = questionDetails.question_placeholder

            textarea.addEventListener( 'keyup', () => {

                if( textarea.value !== '' ) {
                    this.button.disabled = ''

                    if( textarea.value.length % 5 === 0 ) {
                        let questionData = this.questions[ this.currentQuestion ]
                        let answer = {
                            id : questionData.id,
                            question_name : questionData.question_name,
                            question_title : questionData.question_title,
                            question_type : questionData.question_type,
                            question_answer : textarea.value
                        }
                        this.storeAnswerInDatabase( answer )
                    }

                } else {
                    this.button.disabled = 'disabled'
                }

            } )

            this.answerHolder.appendChild( textarea )

        }

        this.setProgress()

    }

    setThankYouScreen() {

        document.title = 'Einde quiz - Intermix Stagiairs Quiz'

        this.clearAnswerHolder()
        this.noteText.innerText = ''

        let name = this.nameField.value

        this.nameField.parentElement.removeChild( this.nameField )
        this.button.parentElement.removeChild( this.button )

        this.questionHolderTitle.innerHTML = `Thanks <span class="color--ac--first">${name}</span> :)`

        document.getElementById( 'quiz-title' ).innerText = 'Einde van de quiz'

        this.setProgress()

    }

    nextQuestion() {

        this.storeAnswer()

        if( this.currentQuestion === 0 ) {
            this.nameField.setAttribute( 'readonly', 'readonly' )
        }

        this.currentQuestion++
        if( this.currentQuestion === this.questions.length ) {
            this.setThankYouScreen()
        } else {
            this.button.disabled = 'disabled'
            this.setQuestion()
        }

    }

    clearAnswerHolder() {

        let answerHolderChildren = this.answerHolder.childElementCount

        let index = 0
        while( index < answerHolderChildren ) {
            this.answerHolder.removeChild( this.answerHolder.children[ 0 ] )
            index++
        }

    }

    storeAnswer() {

        let questionDetails = this.questions[ this.currentQuestion ]
        let answer = {
            id : questionDetails.id,
            question_type : questionDetails.question_type,
            question_title : questionDetails.question_title,
            question_name : questionDetails.question_name
        }

        if( questionDetails.question_type === 'name' ) {
            answer.question_answer = this.nameField.value
        }

        if( questionDetails.question_type === 'rating' ) {
            answer.question_answer = document.getElementsByClassName( 'rating-button--active' )[0].value
        }

        if( questionDetails.question_type === 'options' ) {
            answer.question_answer = document.getElementsByClassName( 'active' )[0].children[0].value
        }

        if( questionDetails.question_type === 'input' ) {
            answer.question_answer = document.querySelector( '#answer-holder input' ).value
        }

        if( questionDetails.question_type === 'textarea' ) {
            answer.question_answer = document.querySelector( '#answer-holder textarea' ).value
        }

        this.answers.push( answer )

        this.storeAnswerInDatabase( answer, 1 )

        this.localstorageData = {
            version : this.version,
            name : this.nameField.value,
            answers : this.answers
        }
        window.localStorage.setItem( 'intermixStagiairsQuizData', JSON.stringify( this.localstorageData ) )

    }

    loadAnswers() {

        let data = window.localStorage.getItem( 'intermixStagiairsQuizData' )
        if( data !== null ) {
            this.localstorageData = JSON.parse( data )
            let version = this.localstorageData.version
            if( version === this.version ) {
                let answers = this.localstorageData.answers
                this.answers = answers
                this.nameField.value = this.answers[0].question_answer
                this.currentQuestion = answers.length - 1 === 0 ? 1 : answers.length

                if( this.currentQuestion > 1 ) {
                    this.nameField.setAttribute( 'readonly', 'readonly' )
                }
                if( this.currentQuestion === this.questions.length ) {
                    this.setThankYouScreen()
                } else {
                    this.button.disabled = 'disabled'
                    this.setQuestion( answers[ this.currentQuestion ] )
                }

            }
        }

    }

    storeAnswerInDatabase( answer, final = 0 ) {

        let data = {
            version : this.version,
            name : this.nameField.value,
            question_id : answer.id,
            question_name : answer.question_name,
            question_title : answer.question_title,
            question_type : answer.question_type,
            question_answer : answer.question_answer,
            timer : Date.now() - this.startTime,
            final : final
        }

        this.httpRequestsClass.post( data, '/api/answers' ).then( (json) => { /* do nothing */ } )

    }

}
