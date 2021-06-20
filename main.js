Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#webcam");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='captured_img'src='"+data_uri+"'/>"
      })
}
console.log('ml5 version: '+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dlNdgeodV/model.json", modelloaded);  
function modelloaded(){
    console.log('Model Loaded!')
}
function speak(emoji){
            var synth = window.speechSynthesis; 
                speak_data = emoji;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
}
function identify_img(){
    img=document.getElementById("captured_img")
    classifier.classify(img, gotresult)
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }    
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        document.getElementById("result_emotion_name2").innerHTML=results[1].label
        if(document.getElementById("result_emotion_name").innerHTML == "Angry"){
            document.getElementById("result_emotion_name").innerHTML=document.getElementById("result_emotion_name").innerHTML+"&#128545;"
            speak("Angry");
        }
        if(document.getElementById("result_emotion_name").innerHTML == "Happy"){
            document.getElementById("result_emotion_name").innerHTML=document.getElementById("result_emotion_name").innerHTML+"&#128512;"
            speak("Happy");
        }
        if(document.getElementById("result_emotion_name").innerHTML == "Sad"){
            document.getElementById("result_emotion_name").innerHTML=document.getElementById("result_emotion_name").innerHTML+"&#128528;"
            speak("Sad");
        }
        if(document.getElementById("result_emotion_name2").innerHTML == "Angry"){
            document.getElementById("result_emotion_name2").innerHTML=document.getElementById("result_emotion_name2").innerHTML+"&#128545;"
            speak("Angry");
        }
        if(document.getElementById("result_emotion_name2").innerHTML == "Happy"){
            document.getElementById("result_emotion_name2").innerHTML=document.getElementById("result_emotion_name2").innerHTML+"&#128512;"
            speak("Happy");
        }
        if(document.getElementById("result_emotion_name2").innerHTML == "Sad"){
            document.getElementById("result_emotion_name2").innerHTML=document.getElementById("result_emotion_name2").innerHTML+"&#128528;"
            speak("Sad");
        }
    }
}