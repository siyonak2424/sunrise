const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var h1=0;
var h2;

var bg = "sunrise.png";

function preload() {
   h1= getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    console.log(h1)
    if(h1>=12){
        h2=h1%12
        text("Time : "+ h2 + " PM", 50,100);
    }else if(h1==0){
        text("Time : 12 AM",100,100);
    }else{
        h2=h1%12
        text("Time : "+ h2 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract h1
    
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var rjson=await response.json();
    var dt=rjson.datetime;
    var h1=dt.slice(11,13);
    
    if(h1>=0 && h1<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
    return(h1)
}
