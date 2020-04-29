let ter = new Date;

boberFunc = () => {
    console.log("1. div");
}

boberFunc2 = () => {
    console.log(ter.getHours()+":"+ter.getMinutes()+":"+ter.getSeconds());
console.log(ter.getTime())
}

colChange = () => {
    var elem = document.getElementsByClassName("field"');
    console.log("uuuutttt")

    var b = "red"
    
    elem.style.backgroundColor = b;
    console.log("koniec");
}