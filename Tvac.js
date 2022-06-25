img = "";
Status
function setup() {
  canvas =  createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "object : is ditected";
}
function modelLoaded() {
  console.log("model Loaded!");
  Status = true;
  objectDetector.detection(img , gotPoses);
}
function preload() {
    img = loadImage("tvac.webp");
}
function draw() {
    image(img , 0 , 0 , 640 , 420);
     fill('#FF0000');
     text("Tv" , 45 , 100);
     noFill();
     stroke('#FF0000');
     rect(30 , 90 , 450 , 350);

     fill('#FF0000');
     text("Ac" , 160 , 30);
     noFill();
     stroke('#FF0000');
     rect(150 , 20 , 350 , 50);
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