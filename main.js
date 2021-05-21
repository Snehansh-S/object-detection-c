objectDetector="";

img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting-objects"
}
function modelLoaded(){
    console.log("cocossd is initialized");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
    console.log(error);
    objects=results;
}
console.log(results);
}
function preload(){
    img=loadImage("dog_cat.jpg");
   
}
function draw(){
    image(img,0,0,640,420);

    if(status !=""){

        for(var i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Staus : objects Detected";
fill("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x +15,objects[i].y +15);
noFill();
rect(percent,objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#FF0000");
    text("cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
    fill("#FF0000");
    text("bowl",260,320);
    noFill();
    stroke("#FF0000");
    rect(250,300,150,150);
}
