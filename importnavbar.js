import navHTML, {fetchNavbarCSS}from './exportnavbar.js';
let navHTMLData=navHTML();
let navbar=document.createElement('div');
navbar.id="nav"
navbar.innerHTML=navHTMLData;
document.body.insertBefore(navbar,document.body.childNodes[0]);
let style=document.createElement('style');
let cssData=fetchNavbarCSS();
style.textContent=cssData;
document.head.appendChild(style);
//use nav bar use this file 