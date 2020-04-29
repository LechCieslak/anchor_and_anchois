let ter = new Date;

boberFunc = () => {
    console.log("1. div");
}

boberFunc2 = () => {
    console.log(ter.getHours()+":"+ter.getMinutes()+":"+ter.getSeconds());
console.log(ter.getTime())
}

colChange = () => {
    var elem = document.querySelector(".field2");
    console.log("uuuutttt")
    
    elem.style.backgroundColor = "red";
    console.log("koniec");
}