Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,

    Constraints: {
        facingMode:"enviornment"
    }
});
Camera=document.getElementById("camera");
Webcam.attach("#Camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'">';
});
}

console.log("ml5version-",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_J6SgKseM/model.json",modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function check(){
    img=document.getElementById("picture");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
}
}