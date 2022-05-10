var colors= ["red","blue","grey","pink","green","purple","white","black"];
var circles = document.getElementsByClassName("colors");
for(var i=0;i<circles.length;i++)
{
    circles[i].style.backgroundColor =colors[i]; 
}

var count = 1;
class design {
    constructor(){
        var div = document.createElement('div');
        div.id = 'img' + count;
        div.className = 'innerdesign';
        var divins = document.getElementById("rightcustom2");
        divins.appendChild(div);

        var img1 = document.createElement('img');
        img1.className = "indesign";
        img1.src ='img/designs/design' + count +'.png';
        div.appendChild(img1);
        count++ ;
    }
}
var len = 14;
for(i=0;i<len;i++)
{
    var design1 = new design();
}


let canvas = new fabric.Canvas('prod-canvas');

function updateprodImage(imageURL){
    fabric.Image.fromURL(imageURL, function(img) {                   
        img.scaleToHeight(200);
        img.scaleToWidth(200); 
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
    });
}
;
document.addEventListener("click", (evt) => {
    var i=0;
    for(i=0;i<circles.length;i++){
        var flyoutElement = document.getElementsByClassName('colors')[i];
        let targetElement = evt.target;
        if(targetElement == flyoutElement){
            document.getElementById("prod-div").style.backgroundColor = colors[i];
        }
    }

}, false);


document.addEventListener("click", (evt) => {
    
    const flyoutElement = document.getElementsByClassName('leftimg')[0];
    const flyoutElement2 = document.getElementsByClassName('leftimg')[1];
    const flyoutElement3 = document.getElementsByClassName('leftimg')[2];
    const flyoutElement4 = document.getElementsByClassName('leftimg')[3];
    const rgtcustom1 = document.getElementsByClassName('rightcustom')[0];
    const rgtcustom2 = document.getElementsByClassName('rightcustom2')[0];
    const rgtcustom3 = document.getElementsByClassName('rightcustom3')[0];
    const rgtcustom4 = document.getElementsByClassName('rightcustom4')[0];
    let targetElement = evt.target;
   
    
    if(targetElement == rgtcustom1){
        document.getElementsByClassName('rightcustom')[0].style.display = 'block';
    }
    else if(targetElement == rgtcustom2){
        document.getElementsByClassName('rightcustom2')[0].style.display = 'block';
    }
    else if(targetElement == rgtcustom3){
        document.getElementsByClassName('rightcustom3')[0].style.display = 'block';
    }
    else if(targetElement == rgtcustom4){
        document.getElementsByClassName('rightcustom4')[0].style.display = 'block';
    }
    else if(targetElement == flyoutElement){

        document.getElementsByClassName('rightcustom')[0].style.display = 'block';
        document.getElementsByClassName('rightcustom2')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom3')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom4')[0].style.display = 'none';
    }
    else if(targetElement == flyoutElement2){
        document.getElementsByClassName('rightcustom')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom2')[0].style.display = 'block';
        document.getElementsByClassName('rightcustom3')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom4')[0].style.display = 'none';
    }
    else if(targetElement == flyoutElement3){
        document.getElementsByClassName('rightcustom')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom2')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom3')[0].style.display = 'block';
        document.getElementsByClassName('rightcustom4')[0].style.display = 'none';
    }
    else if(targetElement == flyoutElement4){
        document.getElementsByClassName('rightcustom')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom2')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom3')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom4')[0].style.display = 'block';
    }
    
    else{
        document.getElementsByClassName('rightcustom')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom2')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom3')[0].style.display = 'none';
        document.getElementsByClassName('rightcustom4')[0].style.display = 'none';
    }
    targetElement = targetElement.parentNode;
},false);

document.addEventListener("click", (evt) => {
    var i;
    let designs = document.getElementsByClassName('indesign');
    
    let targetElement = evt.target;
 
    for(i=0;i<designs.length;i++){
        if(targetElement == designs[i]){
            
            updateprodImage(document.getElementsByClassName('indesign')[i].src);
        }
    }
    targetElement = targetElement.parentNode;
},false);

document.getElementById('prod-custompicture').addEventListener("change", function(e){
    var reader = new FileReader();
    reader.onload = function (event){
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            var img = new fabric.Image(imgObj)
            img.scaleToHeight(200);
            img.scaleToWidth(200); 
            canvas.centerObject(img);
            canvas.add(img);
            canvas.renderAll();
        };
    };
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
    }
}, false);
document.addEventListener("keydown", function(e) {
    var keyCode = e.keyCode;

    if(keyCode == 46){
        console.log("Removing selected element on Fabric.js on DELETE key !");
        canvas.remove(canvas.getActiveObject());
    }
}, false);





//text js

function Addtext() {

    canvas.add(new fabric.IText('Tap and Type', {
    left: 25,
    top:  100,
    fontFamily: 'arial black',
    fill: '#333',
    fontSize: 20,
}));

}