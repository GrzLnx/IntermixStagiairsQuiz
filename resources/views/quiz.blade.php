<!doctype html>
<html lang="nl" class="ub__html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preload" href="/css/ultibase.css" as="style">
    <link rel="preload" href="/includes/js/HttpRequests.class.js" as="script">
    <link rel="preload" href="/includes/js/IntermixStagiairsQuestions.class.js" as="script">
    <link rel="preload" href="/includes/js/script.js" as="script">
    <title>Startscherm - Intermix Stagiairs Quiz</title>
    <link rel="stylesheet" href="/css/ultibase.css">
</head>
<body class="ub__body">
    <header>
        <section class="section" id="name-holder">
            <div class="section__row">
                <h1 id="quiz-title">Hallo, <input type="text" id="name" placeholder="naam"></h1>
            </div>
        </section>
    </header>
    <main>
        <section class="section" id="questions-holder">
            <div class="section__row">
                <progress id="completed" value="4" max="100"></progress>
                <div class="content-holder">
                    <div id="question-holder">
                        <h2 id="question-holder-title">Vul je naam in</h2>
                        <div class="question-holder-options"></div>
                    </div>
                    <div id="answer-holder"></div>
                    <span id="note-text"></span>
                </div>
                <div class="button-holder">
                    <button class="button button--first" id="next-button" disabled>Volgende vraag</button>
                </div>
            </div>
        </section>
    </main>
    <script src="/includes/js/HttpRequests.class.js" defer="defer"></script>
    <script src="/includes/js/IntermixStagiairsQuestions.class.js" defer="defer"></script>
    <script src="/includes/js/script.js" defer="defer"></script>
</body>
</html>
