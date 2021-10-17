
let showdata=document.createElement('div');
import getDetais from './uimaker.js';
//let da="2021-10-18";
let date=new Date();
let d=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
let topnewsHeading=document.createElement("h1")
//console.log(d===da)
let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ef37a704a9a040e4b1d888594882b6d3";
document.getElementById('logo').onclick=()=>{
    window.location.href="index.html"
}
document.querySelector('#search').onclick=()=>{
    if(!document.getElementById('searchValue').value)
    alert("Enter your topic!")
    else{
        let data=document.getElementById('searchValue').value;
         url=`https://newsapi.org/v2/everything?q=${data}&sortBy=popularity&from=${d}&apiKey=ef37a704a9a040e4b1d888594882b6d3`;
         hello();
         topHead(`TOP 10  NEWS:${data.toUpperCase()}`)
         document.getElementById('searchValue').value="";

}
 
}
 document.getElementById('Sports').onclick=()=>{
    url=`https://newsapi.org/v2/everything?q=Sports&sortBy=popularity&apiKey=ef37a704a9a040e4b1d888594882b6d3`;
    hello();
    topHead("TOP 10  NEWS:SPORTS")
}
document.getElementById('Entertainment').onclick=()=>{
    url=`https://newsapi.org/v2/everything?q=Entertainment&sortBy=popularity&apiKey=ef37a704a9a040e4b1d888594882b6d3`;
    hello();
    topHead("TOP 10 NEWS: ENTERTAINMENT")
}
document.getElementById('Technology').onclick=()=>{
    url=`https://newsapi.org/v2/everything?q=Technology&sortBy=popularity&apiKey=ef37a704a9a040e4b1d888594882b6d3`;
    hello();
    topHead("TOP 10 NEWS :TECHNOLOGY")
}
hello();
topHead("TOP 10 BREAKING NEWS")
function hello(){
    showdata.innerHTML=`<img id="loading" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif">`;
showdata.style.textAlign="center";
document.querySelector('.container').append(showdata);
document.querySelector('#loading').style.width="200px";
    fetch(url)
.then((Response)=>{
    console.log(Response)
    //alert(Response.status)
    return Response.json();
})
.then((Response)=>{
    //console.log(Response)
    showdata.style.textAlign="left"
    showdata.innerHTML=null;
    console.log(Response.articles);
    let ui=getDetais(Response.articles);
    showdata.appendChild(ui)
})
.catch((e)=>{
    console.log(e);
   // alert(e)
    showdata.innerHTML="<h1 id='err'>Connection failed! check your connection</h1>";
    document.querySelector('#err').style.color="red";
    // setInterval(()=>window.location.href="recipi_of_the_day.html",3000)
})} 

function topHead(e){
   

        topnewsHeading.textContent=e;topnewsHeading.style.backgroundColor="red";topnewsHeading.style.textAlign="center";topnewsHeading.style.color="#fff";topnewsHeading.style.padding="5px";
        document.body.insertBefore(topnewsHeading,document.body.childNodes[0]);
        
}