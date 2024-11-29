
var image_links = ['img/retrato/1.jpg', 'img/retrato/2.jpg', 'img/retrato/3.jpg', 'img/retrato/4.jpeg',]
var carrossel_image_alternable = document.getElementById('carrossel-image-alternable')

let index = 0
function definir_imagem_carrosel(){
    if (index < image_links.length){
    carrossel_image_alternable.src = image_links[index]
    index++
}else{
    index = 0
}
}
var interval = setInterval(definir_imagem_carrosel, 2000)

var create_interval = function() {
    interval = setInterval(definir_imagem_carrosel, 2000);
    }

function start_carrossel() {
    create_interval();
}

function parar_carrossel() {
    clearInterval(interval);
}
