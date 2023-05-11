const generateMemeBtn =document.querySelector('.memegen .gen-meme-btn ');
const memeImage=document.querySelector('.memegen .display-meme img');
const memeTitle=document.querySelector('.memegen memeTitle');
const memeAuthor=document.querySelector('.memegen .meme-author');
const addMemeBtn=document.querySelector('.add-btn');

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
}
const generateMeme=()=>{
    fetch('https://meme-api.com/gimme/wholesomememes').then((response)=>response.json()).then((data)=>{
        updateDetails(data.url, data.title, data.author); 
    });
};
const addMeme=()=>{
    fetch('')
}
generateMemeBtn.addEventListener("click",generateMeme);
addMemeBtn.addEventListener("click",addMeme);