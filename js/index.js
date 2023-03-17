var config = {
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

function preload (){
    this.load.image("patas","img/patas.jpg")
    this.load.image("mono","img/dart_monke.png")
    this.load.image("caraSad","img/sad-smay.png")
}
function create (){
    this.image = this.add.image(50,50,"patas")
    text = this.add.text(250,16,"",{ fill: '#ffffff' })
    this.image.setInteractive()
    this.input.on("gameobjectdown",clicked,this)
} 
function update (){

}
function clicked(a,b){
    player.money = player.money + player.click
    text.text = "Tienes " + player.money + " de dinero"
}
this.player = {
    click:1,
    cps:0,
    money:0
}