function fetchNavbarHTML(){
        return `<h1>Get News</h1>
        
        <input type="text" placeholder="search your recipe">
        <button id="search">search</button>
        
        <div onclick="navigation(1)">Sports</div>
        <div onclick="navigation(2)">Entertainment</div>
        <div onclick="navigation(3)">Technogy</div>`
    }
   let fetchNavbarCSS=()=> {
  return `body {
    margin: 0;
  }
  #nav {
    display: flex;
    width: 100%;
    background-color: rgb(21, 3, 37);
    color: #fff;
    font-weight: bold; 
    border-bottom: 2px solid rgb(80, 76, 76);
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    padding-top: 10px;
  }
  #nav > h1 {
    margin: 0;
    padding: 0;
    flex-basis: 20%;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #nav > div {
    flex-basis: 20%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius:10px;
  }
  #nav > div:hover {
    background-color:rgb(59, 181, 230);
    color: #fff;
    transition: 0.5s;
   
  }
  input{
    border:none;
  width:50%;
  height: 40px;
  color:rgb(76, 219, 20);
  border-bottom:1px solid hotpink;
  border-radius: 7px;
 
}
#search{
    background: indigo;
    font-weight: bold;
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 7px;
    color: aliceblue;
    padding-top: 10px;
    padding-bottom: 10px;
}
#search:hover{
    border:1px solid rgb(255, 255, 255);
}
  `;
}
    export default fetchNavbarHTML;
    export {fetchNavbarCSS};
//Note:you can change the default function name where you are importing,,but non default export function name you can't change during import.