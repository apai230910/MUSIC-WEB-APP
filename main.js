song1 = "";

song2 = "";

leftWristX = "";

leftWristY = "";

rightWristY = "";

rightWristX = "";

function preload() {

 song1 = loadSound("music.mp3");

 song2 = loadSound("music2.mp3");

}

function setup() {

 canvas = createCanvas(600 ,500);

 canvas.center();

 video = createCapture(VIDEO);

 video.hide();
 
 poseNet = ml5.poseNet( video , modalLoaded);

 poseNet.on( "pose", gotPoses );

}

function modalLoaded() {

 console.log("PoseNet Intialized");

}

function gotPoses(results) {

 if(results.length > 0) {

 console.log(results);

 leftWristX = results[0].pose.leftWrist.x;

 leftWristY = results[0].pose.leftWrist.y;

 rightWristY = results[0].pose.rightWrist.y;

 rightWristX = results[0].pose.rightWrist.x;
  
}

}

function draw() {

 image(video,0 ,0 , 600 ,500);

}
