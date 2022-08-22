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
            question_title : 'Vul je naam in',
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
                description: 'Volledig incompetent, je kan net een HTML pagina maken.'
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: 'Flinke aardappel, verder dan een pagina met een titel kom je niet.'
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: 'Redelijke basis, een simpele HTML pagina lukt jou wel.'
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: 'Wel aardig, je ouders denken dat je een echte hacker bent.'
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: 'Goed, het meeste maak je bijna foutloos.'
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: 'Je hebt de basis goed onder de knie en kan elk design wel omzetten naar een goede pagina.'
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: 'Erg goed, zelfs complexe layouts zijn voor jou geen probleem, al kost het nog wel wat tijd.'
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: 'Voorbeeld van de klas, iedereen stelt hun vragen aan jou.'
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: 'Bizar, je kent alle HTML tags uit je hoofd en weet ook hoe je ze moet gebruiken.'
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: 'Niemand is beter. In een uurtje maak je de moeilijkste HTML layouts.'
            } ]
        },
        {
            id : 3,
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
            id : 4,
            question_type : 'input',
            question_title : 'Wat is je lievelingseten?',
            question_name : 'favorite_food',
            question_placeholder : 'Jouw lievelingseten...',
            question_options : [],
            question_answers : []
        },
        {
            id : 5,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw CSS skills geven?',
            question_name : 'css_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value: 1,
                description: 'Erg zielig, zelfs je oma is beter, en die weet net hoe een computer aan kan.'
            }, {
                id : 2,
                text : '2',
                value: 2,
                description: 'Matig, je kan net de achtergrondkleur van een pagina wijzigen.'
            }, {
                id : 3,
                text : '3',
                value: 3,
                description: 'Redelijke basis, een simpel design lukt jou wel.'
            }, {
                id : 4,
                text : '4',
                value: 4,
                description: 'Wel aardig, je ouders denken dat je een echte hacker bent.'
            }, {
                id : 5,
                text : '5',
                value: 5,
                description: 'Goed, het meeste maak je bijna foutloos.'
            }, {
                id : 6,
                text : '6',
                value: 6,
                description: 'Je hebt de basis goed onder de knie en zet elk design pixel precies om naar een mooie website.'
            }, {
                id : 7,
                text : '7',
                value: 7,
                description: 'Erg goed, zelfs complexe layouts zijn voor jou geen probleem, al kost het nog wel wat tijd.'
            }, {
                id : 8,
                text : '8',
                value: 8,
                description: 'Voorbeeld van de klas, iedereen stelt hun vragen aan jou.'
            }, {
                id : 9,
                text : '9',
                value: 9,
                description: 'Jij styled elke design perfect responsive.'
            }, {
                id : 10,
                text : '10',
                value: 10,
                description: 'SVG\'s, animaties, filters, CSS variabelen, niks is jou te gek.'
            } ]
        },
        {
            id : 6,
            question_type : 'options',
            question_title : 'Heb je wel eens PHP gebruikt?',
            question_name : 'used_php',
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
            question_type : 'textarea',
            question_title : 'Wat wil / verwacht je hier ( te ) leren?',
            question_name : 'expectations',
            question_placeholder : 'Wat je hier verwacht / wilt ( te ) leren...',
            question_options : [],
            question_answers : []
        },
        {
            id : 8,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, wat voor cijfer zou je jouw JavaScript skills geven?',
            question_name : 'js_skills',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value : 1,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 2,
                text : '2',
                value : 2,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 3,
                text : '3',
                value : 3,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 4,
                text : '4',
                value : 4,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 5,
                text : '5',
                value : 5,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 6,
                text : '6',
                value : 6,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 7,
                text : '7',
                value : 7,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 8,
                text : '8',
                value : 8,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 9,
                text : '9',
                value : 9,
                description : 'Geen zin om weer iets te bedenken.'
            }, {
                id : 10,
                text : '10',
                value : 10,
                description : 'Geen zin om weer iets te bedenken.'
            } ]
        },
        /*
        {
            id : 9,
            question_type : 'options',
            question_title : 'Is Flonky koel?',
            question_name : 'flonky',
            question_placeholder : '',
            question_options : [],
            question_answers : [
                {
                    id : 1,
                    text : 'Nee',
                    value : 1
                },
                {
                    id : 2,
                    text : 'Nee',
                    value : 0
                }
            ]
        },
        */
        {
            id : 10,
            question_type : 'input',
            question_title : 'Bonusvraag',
            question_name : 'bonus',
            question_placeholder : 'Vul hier het woord in...',
            question_options : [],
            question_answers : []
        },
        /*
        {
            id : 11,
            question_type : 'rating',
            question_title : 'Op een schaal van 1 tot 10, hoe hip is Adriaan?',
            question_name : 'cool',
            question_placeholder : '',
            question_options : [],
            question_answers : [ {
                id : 1,
                text : '1',
                value : 1,
                description : 'Dit antwoord is fout.'
            }, {
                id : 2,
                text : '2',
                value : 2,
                description : 'Dit antwoord is fout.'
            }, {
                id : 3,
                text : '3',
                value : 3,
                description : 'Dit antwoord is fout.'
            }, {
                id : 4,
                text : '4',
                value : 4,
                description : 'Dit antwoord is fout.'
            }, {
                id : 5,
                text : '5',
                value : 5,
                description : 'Dit antwoord is fout.'
            }, {
                id : 6,
                text : '6',
                value : 6,
                description : 'Dit antwoord is fout.'
            }, {
                id : 7,
                text : '7',
                value : 7,
                description : 'Dit antwoord is fout.'
            }, {
                id : 8,
                text : '8',
                value : 8,
                description : 'Dit antwoord is fout.'
            }, {
                id : 9,
                text : '9',
                value : 9,
                description : 'Dit antwoord is fout.'
            }, {
                id : 10,
                text : '10',
                value : 10,
                description : 'Inderdaad, eigenlijk een 11 maar daar kan je niet voor kiezen.'
            } ]
        },
        */
        {
            id : 12,
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
            id : 13,
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
            id : 14,
            question_type : 'textarea',
            question_title : 'Maak met HTML een link die opent in een nieuw tabblad',
            question_name : 'html_link',
            question_placeholder : 'Link die opent in een nieuw tabblad...',
            question_options : [],
            question_answers : []
        },
        {
            id : 15,
            question_type : 'options',
            question_title : 'Is console.log( hallo ) valide JavaScript (komt er geen error)?',
            question_name : 'valid_js',
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
