let ter = new Date;

boberFunc = () => {
    console.log("1. div");
}

boberFunc2 = () => {
    console.log(ter.getHours()+":"+ter.getMinutes()+":"+ter.getSeconds());
console.log(ter.getTime())
}

colChange = () => {
    
    var elem = document.querySelector(".field");

    var a = (Math.floor(Math.random()*8));
    var b = colors[a];
    console.log(b);
     
    elem.style.backgroundColor = b;
    console.log("koniec");
}