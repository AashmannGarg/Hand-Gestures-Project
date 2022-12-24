//https://teachablemachine.withgoogle.com/models/85dOZZ6pN/model.json
var prediction_1="";
var prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}); 
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"; 
    });
    speak();
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/85dOZZ6pN/model.json",modelLoaded);
function modelLoaded(){
    console.log("model Loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The Fisrt Prediction is "+prediction_1;
    speak_data2="The Second Prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}