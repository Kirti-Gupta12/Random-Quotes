const quoteText=document.querySelector(".Quote");
authorName=document.querySelector(".author .name");
quoteBtn=document.querySelector("button");
bg=document.querySelector(".wrapper");
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
twitterBtn=document.querySelector(".twitter");

//random quote function:-
function randomQuote()
{
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote...";
    //fetching random quotes/data from the API and passing it into javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
       
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    })
}
quoteBtn.addEventListener("click",randomQuote);


soundBtn.addEventListener("click",()=>{
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance= new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`); // speak method of SpeechSynthesis speaks the Utterance
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
   navigator.clipboard.writeText(quoteText.innerText);
   alert("Copied !");
});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank"); //opening a new twitter tab with passing quote in url
});