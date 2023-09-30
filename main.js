difference=0;
leftWristX=0;
rightWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);    

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.y;
        difference=Math.floor(leftWristX-rightWristX);

    }
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    background('#87CEEB');
    fill('#FFFFFF');
    textSize(difference);
    text('Lisa',20,220);
}