let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hats erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "die Schweizer",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welcher Berg ist der höchste Berg der Welt?",
        "answer_1": "Mount Everest",
        "answer_2": "Zugspitze",
        "answer_3": "Mount Ipstein",
        "answer_4": "Erbeskopf",
        "right_answer": 1
    },
    {
        "question": "Wie nennt man ein männliches Schwein?",
        "answer_1": "Sau",
        "answer_2": "Rüde",
        "answer_3": "Eber",
        "answer_4": "Schweinerich",
        "right_answer": 3
    },
    {
        "question": "Wie viele Knochen hat die menschliche Hand?",
        "answer_1": 27,
        "answer_2": 33,
        "answer_3": 725,
        "answer_4": 310,
        "right_answer": 1
    }, {
        "question": "Welches ist der längste Fluss der Welt?",
        "answer_1": "Amazonas",
        "answer_2": "Nil",
        "answer_3": "Mississippi",
        "answer_4": "Rhein",
        "right_answer": 2
    }, {
        "question": "Welcher Planet ist der größte in unserem Sonnensystem?",
        "answer_1": "Saturn",
        "answer_2": "Venus",
        "answer_3": "Mars",
        "answer_4": "Jupiter",
        "right_answer": 4
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showquestion();
}

function showquestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('current question is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger')
    };
}