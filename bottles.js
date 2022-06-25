img = "";
Status = "";
function setup() {
  canvas =  createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML="Object : is deticted";
}
function modelLoaded() {
  console.log("model Loaded!");
  Status = true;
  objectDetector.detection(img , gotPoses);
  
}
function preload() {
    img = loadImage("bottles.jpg");
}
function draw() {
    image(img , 0 , 0 , 640 , 420);
     fill('#00FF00');
     text("bottle" , 45 , 75);
     noFill();
     stroke('#00FF00');
     rect(30 , 60 , 560 , 350);
    }
    function gotPoses(error , results) {
      if(error){
        console.log(error);
      }
      console.log(results);
    }
    function back() {
      window.location = "Index.html";
    }