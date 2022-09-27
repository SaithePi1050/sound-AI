function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VUvtsV_jl/model.json', modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}




