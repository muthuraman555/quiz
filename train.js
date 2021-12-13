const quizdata=[
    {
        question:"defination for api?",
        a_1:'aplication programming language',
        b_2:'hyber text markub language',
        c_3:'cascade styling sheet',
        d_4:'aplication programe intercom',
        correct:'a'
    }, {
        question:"what is the most use programming language  2020?",
         a_1:'java',
         b_2:'python',
         c_3:'c++',
         d_4:'javascript',
        correct:'d'

    },   {
        question:"who is presitent in india ?",
         a_1:'modi',
         b_2:'apj',
         c_3:'monmohan shing',
         d_4:'patel',
        correct:'a'

    },   {
        question:"javascript language langing year?",
        a_1:'1996',
        b_2:'1995',
        c_3:'1998',
        d_4:'1999',
        correct:'b'

    },
];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
const questionEl = document.getElementById('question');
 const answereld = document.querySelectorAll('.answer');
  const quiz = document.getElementById('quiz');

let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz ()

{
    deselected()
    const currentquizdata = quizdata[currentquiz];

    questionEl.innerHTML=currentquizdata.question;
    a_text .innerHTML = currentquizdata.a_1;
    b_text .innerHTML = currentquizdata.b_2;
    c_text .innerHTML = currentquizdata.c_3;
    d_text .innerHTML = currentquizdata.d_4;
}
function getselected(){

    let answer = undefined;

    answereld.forEach((answereld) =>{
        if(answereld.checked)
        {
        answer = answereld.id;
        }
    });
    return answer;
}

function deselected()
{
    answereld.forEach((answereld) =>{
        
        answereld.checked=false;
    });
}
 
submitbtn.addEventListener('click' , () =>{
     const answer = getselected();
   
if(answer)
{
    if(answer ===  quizdata[currentquiz].correct)
    {
        score++;
    }
    currentquiz++;
}
  

if(currentquiz < quizdata.length)
{
    loadquiz();
}
else
{
   quiz.innerHTML = `<h1> your answer correctly at ${score}/${quizdata.length}question.</h1>`;
}
    
    
});