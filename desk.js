img = "";
Status = "";
function setup() {
  canvas =  createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "object : is ditected";
}
function modelLoaded() {
  console.log("model Loaded!");
  Status = true;
  ObjectDetector.detection(img , gotPoses);
}
function preload() {
    img = loadImage("desk.jpg");
}
function draw() {
    image(img , 0 , 0 , 640 , 420);
     fill('#FF0000');
     text("desk" , 45 , 75);
     noFill();
     stroke('#FF0000');
     rect(30 , 60 , 450 , 350);
}
function gotPoses (error , results) {
  if(error) {
    console.log(error);
  }
  console.log(results);
}
function back() {
  window.location = "Index.html";
}