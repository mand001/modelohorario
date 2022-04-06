function carregar (){

var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var msg2= document.getElementById('msg2')
msg.innerHTML= `Agora são ${hora}h e ${min}min.`
if (hora >=0 && hora <12) {
    msg.innerHTML += 'Bom dia!'
    //BOM DIA
    img.src= 'manha.png'
    document.body.style.background= '#d1bd92'
} else if (hora >=12 && hora <=18) {
    //BOA TARDE
    img.src='tarde.png'
    document.body.style.background= '#89523e'
}else {
    //BOA NOITE
   
    img.src='noite.png'
    document.body.style.background= '#1d2734'
}

}

