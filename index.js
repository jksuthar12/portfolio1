window.onkeydown = up;
var i = 0;
var text = "Jitendra Suthar";
var dro = 0;

function drop() {
  const dropdown = document.getElementById('dropdown');
  const secondLine = document.getElementById('secondline');
  if(dro == 0) {
   dropdown.style.maxHeight = "1000px";
  secondLine.style.transform="translateX(-10px)";
  dro++;
  }
  else{
    dropdown.style.maxHeight = "0";
    secondLine.style.transform="translateX(10px)";
    dro = 0;
  }
}
var f =0;
function flip() {
  if(f == 0){   document.getElementById("details").style.display = "flex";
    document.getElementById('fprojects').style.display="none";
  document.getElementById("card").style.transform = "rotateY(180deg)";
  }
  else if(f == 1){
   
    document.getElementById("details").style.display = "none";
    document.getElementById('fprojects').style.display ="flex"
    document.getElementsByClassName('fproject')[0].classList.add('fprojectanimation')
    document.getElementsByClassName('fproject')[1].classList.add('fprojectanimation')
    document.getElementsByClassName('fproject')[2].classList.add('fprojectanimation')
  }
  else {
    document.getElementById("card").style.transform= "none";
    document.getElementById('fprojects').style.display="none";
    document.getElementById("details").style.display = "flex";
    f = -1;
  }
  
  f++;
}
function down(event) {
  var y = event.clientY;
  console.log(y)
}
function up(e) {
  e = e || window.Event;
  
 document.getElementById('first').classList.add('ta');
 document.getElementById('second').classList.add('sec');
 document.getElementById('second').style.display="block";
 document.getElementById('details').style.display="none";
}
function animationInEducation() {
  const edu = document.querySelectorAll(".edu-content");
  edu.forEach(ele=>{
    const ob = ele.getBoundingClientRect();
    if(ob.top < window.innerHeight) {
      ele.classList.add("educationAnimation");
    }
  });
}
function channge() {
  var x = window.scrollY;
  // document.getElementById('l').innerHTML = x;
  var image = document.getElementById('image')
  if(x >= 210) {
  
   image.classList.add('trans');
  }
  else if(x < 210) {
    image.classList.remove('trans');
    image.classList.add('trass');

  }
  animationInEducation();
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
const inp = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
textarea.addEventListener("focus", function(e){
  this.nextElementSibling.style.width = "100%";
});
document.querySelector("#send").addEventListener("mouseover", function(e){
  this.nextElementSibling.style.width = "100%";
  console.log('enter');
  
});
document.querySelector("#send").addEventListener("mouseleave", function(e){
  this.nextElementSibling.style.width = "0%";
  console.log('leave');
  
});
textarea.addEventListener("focusout", function(e){
  this.nextElementSibling.style.width = "0%";
});
inp.forEach(ele=>{
 ele.addEventListener("focus", function(e){
      this.nextElementSibling.style.width = "100%";
});
 ele.addEventListener("focusout", function(e){
      this.nextElementSibling.style.width = "0%";
});

})