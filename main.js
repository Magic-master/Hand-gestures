Webcam.set({
    width: 350,
    hieght: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B2qOh1gbF/', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function check() {
    img = documenet.getElementById("image_captured");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{ document.getElementById("result_gesture_name").innerHTML = results[0].label;
    prediction = results[0].label;
    speak();
    if(results[0].label == "Vulcan Salute")
    document.getElementById("result_emoji").innerHTML = "&#128406;";
    }
    if(results[0].label == "SHHH Symbol"){
    document.getElementById("result_emoji").innerHTML = "&#128070;";
    }
    if(results[0].label == "Peace sign"){
    document.getElementById("result_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "Thumbs UP"){
        document.getElementById("result_emoji").innerHTML = "&#128077;";
        }
    
}