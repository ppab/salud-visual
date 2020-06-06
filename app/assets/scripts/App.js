
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
    //    scrollElement.scrollIntoView({behavior: "smooth"});



       function SmoothVerticalScrolling(e, time, where) {
           var eTop = e.getBoundingClientRect().top;
           console.log(eTop);
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }
    
    function SVS_B(eAmt, where) {
        if(where == "center" || where == "")
            window.scrollBy(0, eAmt / 2);
        if (where == "top")
            window.scrollBy(0, eAmt);
    }

    SmoothVerticalScrolling( scrollElement,500,"top");

      
    }
   
   })
});

