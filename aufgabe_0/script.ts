var name :string = prompt("Name");

function init():void{
      let node = document.getElementById("inhalt");
    if(name.length < 1){
    node.innerHTML = "Bitte vollst‰ndigen Namen eingeben:";
}
        if(name.length >= 1){
    node.innerHTML = "Jetzt weiﬂ ich das du "+name+" heist.";
}
  
}

window.addEventListener("load",init);