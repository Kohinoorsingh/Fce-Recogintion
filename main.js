Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("Cmera");

Webcam.attach(camera);

function Take_Sanpshut()
{
    Webcam.snap(function(data_uri)
    {
      document.getElementById("resolt").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/LegyRiQy3/model.json',modelLoaded);

function modelLoaded()
{
    console.log('model loaded!');
}

function Check()
{
    printer = document.getElementById("captured_image");
    classifier.classify(printer,gotResult);
}

function gotResult(error, results)
{
  if (error) 
  {
    console.error(error);
  }
   else 
  {
    console.log(results);
    document.getElementById("Thing_risult").innerHTML = results[0].label;
    document.getElementById("Thing_accuracy").innerHTML = Math.round(results[0].confidence*100)+"%";
  }
  
}