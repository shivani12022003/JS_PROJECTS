//button onclick=document.getElementById('question q1 ')=>{'question qt2'}
const questions=[
    {
        'ques':which,
        'a':a,
        'b':b,
        'c':c,
        'd':d,
        'correct':'c'
    }
]
let index=0;
const loadQuestion=()=>{
   const data=questions[index];
   console.log(data)
}
