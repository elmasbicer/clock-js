

let username=prompt("Adınız nedir?")
let myName=document.querySelector("#myName")
myName.innerHTML=username

 
function tarihSaat(){
    let clock=new Date().toLocaleString('tr-TR')
document.querySelector("#myClock").innerHTML=clock
}

setInterval(tarihSaat,1000);