var config = { //Configuracion de PHASER
    type: Phaser.AUTO,
    width:800,
    height:600,
    scene:{
        preload: preload,
        create: create,
        update: update
    },
    extend:{
        clicked
    }
}
var game = new Phaser.Game(config)
var text
var textTwo
var textInfoFirstItem

function preload (){ //Recursos a precargar
    this.load.spritesheet("patas","img/patas.gif", { frameWidth: 44, frameHeight: 88});
    this.load.image("mono","img/dart_monke.png")
    this.load.image("caraSad","img/sad-smay.png")
    this.load.image("gemido","img/gemido.354.jpg")
    this.load.image("cuadro","img/cuadro.png")
    this.load.image("fondo","img/gemido.354.jpg no")
    this.load.image("cuadroInfo","img/cuadro-info.png")
    


}



function update(){
}
function addObject(object,textTemp){ //Agregar un objeto 
    if (player.money >= object.price){
        player.money = player.money - object.price
        object.price = object.price + Math.round(object.incremental * object.price / 100)
        object.buyed++
        player.cps = player.cps + object.cpsAdd
        textTwo.text = "Generas " + player.cps + " dinero por segundo"
        textTemp.text = "cuesta: " + object.price + "\n tienes: " + object.buyed + "\n producen: " + (object.cpsAdd * object.buyed) + "/s"
    }
    else{
        text.text = "No puedes permitirte eso"
    }
}
function clicked(a,object){ //Detectar cuando se clickea un objeto interactivo
    switch(object.texture.key){
        case("patas"):
            player.money = player.money + player.click
            text.text = "Tienes " + player.money + " de dinero"
            break
        case("cuadro"):
            addObject(firstItem,textInfoFirstItem)
            break
    }
}
this.player = { //Estadisticas del jugador
    click:1,
    cps:0,
    money:0
}

function updateStatsEverySecond(){ //Actualizar las estadisticas cada segundo
    player.money = player.money + player.cps
    text.text = "Tienes " + player.money + " de dinero"
    setTimeout(() => {
        updateStatsEverySecond()
    }, 1000);
}
class ObjectToBuy{ //Crear los objetos a crear
    constructor(buyed,price,incremental,cpsAdd){
        this.buyed = buyed
        this.price = price,
        this.incremental = incremental,
        this.cpsAdd = cpsAdd
    }
}
//Lista de objetos a crear:
let firstItem = new ObjectToBuy(0,10,100,5)



//
setTimeout(() => {
    updateStatsEverySecond()
}, 4000);
