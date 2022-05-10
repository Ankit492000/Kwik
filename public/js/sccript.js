var index =0;
var index2 = 0;
var slide1imgs = ['/img/slides1/slideimg1.jpg','/img/slides1/slideimg2.jpg','/img/slides1/slideimg3.jpg','/img/slides1/slideimg4.jpg','/img/slides1/slideimg5.jpg'];
var slide2imgs = ['/img/slides2/slideimg1.jpg','/img/slides2/slideimg2.jpg'];
function nextslide(n)
{
    slideshow(index += n);
}
function slideshow(n){
    if(n>slide1imgs.length-1){n = 0}
    if(n<0){n = slide1imgs.length-1}
    document.getElementById("slide1").src = slide1imgs[n];
    index=n;
}
function nextslide2(n)
{
    slideshow2(index2 += n);
}
function slideshow2(n){
    if(n>slide2imgs.length-1){n = 0}
    if(n<0){n = slide2imgs.length-1}
    document.getElementById("slide2").src = slide2imgs[n];
    index2=n;
}
// slideshow(index);
// slideshow2(index2);
setInterval(nextslide,5000,1);
setInterval(nextslide2,6000,1);


//Fixed Menu :

window.onscroll = function() {fixfunction()};

var nav = document.getElementById("nav");
var drop = document.getElementsByClassName("drop");
var filters = document.getElementById("filters");
var i;


var diff = topofset - window.pageYOffset;
var topofset = nav.offsetTop;
var filteroffset = filters.offsetTop;
function fixfunction() {
    
    if (window.pageYOffset > topofset) {
      nav.classList.add("fix");
      for(i=0;i<drop.length;i++){
      drop[i].style.position = "fixed";
      drop[i].style.top="8.6%";
    //   filters.style.position = "fixed";
      }
    } 
    else {
      nav.classList.remove("fix");
      for(i=0;i<drop.length;i++){
        drop[i].style.position= "absolute";
        drop[i].style.top="13.5%";
        // filters.style.position = "absolute";
        }
    }
    
    if(window.pageYOffset + 2*nav.offsetHeight > filteroffset){
        filters.classList.add("fix");
        filters.style.top ="12.5%";
        
    }
    else
    {
        filters.classList.remove("fix");
    }
}

//Dropdown menu :
function dropmen(){
    document.getElementById("dropmen").style.display="block";
}
function dropmenl(){
    document.getElementById("dropmen").style.display="none";
}
function dropwomen(){
    document.getElementById("dropwomen").style.display="block";
}
function dropwomenl(){
    document.getElementById("dropwomen").style.display="none";
}
function dropcustom(){
    document.getElementById("dropcustom").style.display="block";
}
function dropcustoml(){
    document.getElementById("dropcustom").style.display="none";
}


// login page
function detectclick()
{
    document.addEventListener("click", (evt) => {
        const flyoutElement = document.getElementsByClassName('logindiv')[0];
        const flyoutElement1 = document.getElementsByClassName('logindiv2')[0];
        const flyoutElement2 = document.getElementsByClassName('btn1')[1];
        const flyoutElement3 = document.getElementsByClassName('btn1')[2];
        let targetElement = evt.target;

        if(targetElement == flyoutElement2) {
            document.getElementsByClassName('logindiv')[0].style.display ='flex';
        }
        
        else if(targetElement == flyoutElement){
            document.getElementsByClassName('logindiv')[0].style.display ='flex';
        }
           
        if(targetElement == flyoutElement3) {
            document.getElementsByClassName('logindiv2')[0].style.display ='flex';
        }
        else if(targetElement == flyoutElement1){
            document.getElementsByClassName('logindiv2')[0].style.display ='flex';
        }
        // document.getElementsByClassName('logindiv2')[0].style.display ='none';
        // document.getElementsByClassName('logindiv')[0].style.display ='none';
        targetElement = targetElement.parentNode;

    });
}

var flg = 1;
function showlogin()
{
    // document.getElementsByClassName('logindiv')[0].style.display ='flex';
    detectclick();
}


var flg2 =1
function showsigup(){

    if(flg2==1){
        document.getElementsByClassName('logindiv2')[0].style.display ='flex';
        flg2++;
    }
    else{
        detectclick()
    }

}