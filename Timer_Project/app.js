const endDate="29 December 2023, 12:00 pm";
//const endDate = document. querySelector('input'). value;{for now the date is fixed }
document.getElementById("endDate").innerText=endDate;
const inputs=document.querySelectorAll("input");
function clock(){
    const end=new Date(endDate);
    const now=new Date();
    console.log(end,now);
    const diff=(end-now)/1000;
    console.log(diff);
    if(diff < 0)return;

    // convert into days
    inputs[0].value=Math.floor(diff/3600/24); //const days=Math.floor(diff/1000000);console.log(diff);
    // convert into hours
    inputs[1].value=Math.floor((diff/3600)%24); //const hours=Math.floor(diff/100000);console.log(hours);
    // convert into minutes
    inputs[2].value=Math.floor((diff/60)%60); //const minutes=Math.floor(diff/10000);console.log(minutes);
    // convert into seconds
    inputs[3].value=Math.floor(diff)% 60; //const seconds=Math.floor(diff/1000);console.log(seconds);
}
clock();
setInterval( ()=>{clock()},1000  )