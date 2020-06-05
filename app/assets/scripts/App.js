
import '../styles/styles.css';


//Get al a Href
var ahrefs=document.querySelectorAll(`a[href]`);
//Create a Click Listener for each a Href
ahrefs.forEach(element=>{
   element.addEventListener("click",(e)=>{
       //Just use aHref elements that have dataset.goto
    if (e.target.dataset.goto){
        //prevent defalut operation
        e.preventDefault();
       var id=e.target.dataset.goto;
       var scrollElement=document.getElementById(id);
        //go to element
       scrollElement.scrollIntoView({behavior: "smooth"});
      
    }
   
   })
});

