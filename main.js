song ="";
 
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){

    song= loadSound("music.mp3");

}

function setup(){

    canvas= createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log(
            "left wrist X:  " + leftWristX +
            "left wrist Y:  " + leftWristY +
            "right wrist X:  " + rightWristX +
            "right wrist Y:  " + rightWristY)
    }


}


function modelLoaded(){
    console.log("Your model has been loaded");
}

function draw(){

    image(video, 0, 0, 600, 500);
}

function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}


