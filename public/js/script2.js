
document.addEventListener('DOMContentLoaded', () => {
    let Product1 = new Product("img/tshirts/tshirt1.jpg",'This is product description','900',1000,'10%off');
    let Product2 = new Product("img/tshirts/tshirt1.jpg",'This is product description','900',1000,'10%off');
    let Product3 = new Product("img/tshirts/tshirt1.jpg",'This is product description','900',1000,'10%off');
    let Product4 = new Product("img/tshirts/tshirt3.jpg",'This is product description','700',1100,'10%off');
    let Product5 = new Product("img/tshirts/tshirt1.jpg",'This is product description','900',1000,'10%off');
    let Product6 = new Product("img/tshirts/tshirt1.jpg",'This is product description','900',1000,'10%off');
    let Product7 = new Product("img/tshirts/tshirt3.jpg",'This is product descriptionasca','700',1100,'10%off');
    let Product8 = new Product("img/tshirts/tshirt3.jpg",'This is product descriptionasca','700',1100,'10%off');
}, false);
var count = 0;
class Product {
    constructor(image,disc,Sprice,Oprice,discount){
        var div = document.createElement('div');
        div.id = 'prod' + count;
        div.className = 'prod';
        var divins = document.getElementById("pdisplay");
        divins.appendChild(div);
    
        var img1 = document.createElement('img');
        img1.src =image;
        
        var innerdiv = document.createElement('div');
        innerdiv.id = 'pdetails' + count;
        innerdiv.className = 'pdetails';

        var discrip = document.createElement('p');
        discrip.innerHTML =disc;

        var ul = document.createElement('ul');
        ul.id = 'price' + count;

        var getdiv = document.getElementById(div.id);

        getdiv.appendChild(img1);
        getdiv.appendChild(innerdiv);
        var getinnerdiv = document.getElementById(innerdiv.id);
        getinnerdiv.appendChild(discrip);
        getinnerdiv.appendChild(ul);
       
        var getul = document.getElementById(ul.id);

        var li1 = document.createElement('li');
        li1.innerHTML = ' &#8377 ' + Sprice;
        getul.appendChild(li1);
        var li2 = document.createElement('li');
        li2.className="oprice";
        li2.id = 'op'+count;
        li2.innerText = Oprice;
        getul.appendChild(li2);
       
        
        var li3 = document.createElement('li');
        li3.innerText = discount;
        getul.appendChild(li3);
        // var str = document.createElement('strike');
        // var lii2 = document.getElementById(li2.id);
        // lii2.appendChild('str');
        count++;
    }
}