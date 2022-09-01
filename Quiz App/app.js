const quizData = [
    {
        question:'how old is Florin?',
        a:'13',
        b:'16',
        c:'20',
        d:'26',
        correct:'d'
    }, {
        question:'what is the most used programming language?',
        a:'java',
        b:'C',
        c:'python',
        d:'javascript',
        correct:'d'
    }, {
        question:'who is the president of United States?',
        a:'Florin Pop',
        b:'Joe Biden',
        c:'Barrack Obama',
        d:'George Bush',
        correct:'b'
    },{
        question:'what does HTML stands for?',
        a:'hypertext markup language',
        b:'hyersuper text language',
        c:'hydrotext makeup language',
        d:'hydratext markup language',
        correct:'a'
    },{
        question:'What years was javaScript launched?',
        a:'1997',
        b:'1996',
        c:'1993',
        d:'none of the above',
        correct:'d'

    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn  = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
        
    });
    
    return answer;

    }

    function deselectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
            
        });
    }

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    
   if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++;
    }
   
   currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();

       } else {
        quiz.innerHTML = `<h2>you answered correctly at 
        ${score}/${quizData.length} questions.</h2> <button onclick="
        location.reload()">Reload</button>`
       }

   }

});