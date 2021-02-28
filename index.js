
function channge() {
  var x = window.scrollY;
  // document.getElementById('l').innerHTML = x;
  if (x == 0) {
    document.getElementById('h').style.color = "blue";
    document.getElementById('e').style.color = "";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "";
    document.getElementById('c').style.color = "";
  }
  if (x >= 400) {
    document.getElementById('h').style.color = "";
    document.getElementById('e').style.color = "blue";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "";
    document.getElementById('c').style.color = "";
  }
  if (x >= 700) {
    document.getElementById('h').style.color = "";
    document.getElementById('e').style.color = "";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "blue";
    document.getElementById('c').style.color = "";
  }
  if (x >= 1300) {

    document.getElementById('h').style.color = "";
    document.getElementById('e').style.color = "";
    document.getElementById('s').style.color = "";
    document.getElementById('p').style.color = "";
    document.getElementById('c').style.color = "blue";
  }

}
function fo(id) {
  document.getElementById(id).scrollIntoView();
}

let show = () =>{
  var d = document.getElementsByClassName("fa-download");
  var le = d.length;
  if(le==2){
  document.getElementsByClassName("fa-download")[0].classList.add("fa-remove");
  document.getElementsByClassName("fa-remove")[0].classList.remove("fa-download");
 document.getElementsByClassName("bu")[0].style.visibility = "visible";
    document.getElementsByClassName("bu")[0].style.transition = "all 0.5s ease-in-out";
    document.getElementsByClassName("bu")[0].style.right = "15%";
   
}
  else{
    document.getElementsByClassName("fa-remove")[0].classList.add("fa-download");
    document.getElementsByClassName("fa-download")[0].classList.remove("fa-remove");
    document.getElementsByClassName("bu")[0].style.transition = "right 0.5s ease-in-out";
    document.getElementsByClassName("bu")[0].style.right = "2%";
    document.getElementsByClassName("bu")[0].style.visibility = "hidden";
  }
 
}