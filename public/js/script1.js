//Filter colors :

var colors= ["red","blue","grey","pink","green","purple","white","black"]
var circles = document.getElementsByClassName("colors");
for(var i=0;i<circles.length;i++)
{
    circles[i].style.backgroundColor =colors[i]; 
}
var showcount =0;
function showcolors()
{   
    
    if(showcount%2 ==0)
    {
        document.getElementById("colordiv").style.display= "block";
        document.getElementsByClassName("head")[1].style.border = "0px";
        document.getElementsByClassName("arrow")[0].innerHTML = "&#9651";
    }
    else 
    {
        document.getElementById("colordiv").style.display= "none";
        document.getElementsByClassName("head")[1].style.borderBottom = "1px dashed grey";
        document.getElementsByClassName("arrow")[0].innerHTML = "&#9661";
    }
    showcount++ ;
}
var showcount2 =0;
function showsizes()
{   
    
    if(showcount2%2 ==0)
    {
        document.getElementById("sizediv").style.display= "block";
        document.getElementsByClassName("head")[2].style.border = "0px";
        document.getElementsByClassName("arrow")[1].innerHTML = "&#9651";
    }
    else 
    {
        document.getElementById("sizediv").style.display= "none";
        document.getElementsByClassName("head")[2].style.borderBottom = "1px dashed grey";
        document.getElementsByClassName("arrow")[1].innerHTML = "&#9661";
    }
    showcount2++ ;
}
var showcount3=0;
function showprice()
{   
    
    if(showcount3%2 ==0)
    {
        document.getElementById("pricediv").style.display= "block";
        document.getElementsByClassName("head")[3].style.border = "0px";
        document.getElementsByClassName("arrow")[2].innerHTML = "&#9651";
    }
    else 
    {
        document.getElementById("pricediv").style.display= "none";
        document.getElementsByClassName("head")[3].style.borderBottom = "1px dashed grey";
        document.getElementsByClassName("arrow")[2].innerHTML = "&#9661";
    }
    showcount3++;
}

