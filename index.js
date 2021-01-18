  
function channge(){
   var x = window.scrollY;
  // document.getElementById('l').innerHTML = x;
   if(x==0){
       document.getElementById('h').style.color = "blue";
       document.getElementById('e').style.color = "";
       document.getElementById('s').style.color = "";
       document.getElementById('p').style.color = "";
       document.getElementById('c').style.color = "";
   }
    if(x>=400){
    document.getElementById('h').style.color = "";
    document.getElementById('e').style.color = "blue";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "";
    document.getElementById('c').style.color = "";
   }
    if(x>=700){
    document.getElementById('h').style.color = "";
    document.getElementById('e').style.color = "";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "blue";
    document.getElementById('c').style.color = "";
   }
   if(x>=1300){
    
        document.getElementById('h').style.color = "";
        document.getElementById('e').style.color = "";
        document.getElementById('s').style.color = "";
        document.getElementById('p').style.color = "";
        document.getElementById('c').style.color = "blue";
   }
  
}
function fo(id){
  document.getElementById(id).scrollIntoView()
}