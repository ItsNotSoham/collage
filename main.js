apirec=window.webkitSpeechRecognition
rec=new apirec
function start(){
   rec.start()
}
rec.onresult=function(e){
    myspeech=e.results[0][0].transcript
    if(myspeech="selfie"){
        speak()
    }
}
function speak(){
    apispeak=window.speechSynthesis
    Webcam.attach(camera)
    bolo="Taking 5 selfies in 10 seconds"
    bolo1=new SpeechSynthesisUtterance(bolo)
    apispeak.speak(bolo1)
    setTimeout(function(){
    img_id="selfie1"
    takepic()
    bolo="Taking the first picture"
    bolo1=new SpeechSynthesisUtterance(bolo)
    apispeak.speak(bolo1)
    },10000)
    setTimeout(function(){
        img_id="selfie2"
        takepic()
        bolo="Taking the second picture"
        bolo1=new SpeechSynthesisUtterance(bolo)
        apispeak.speak(bolo1)
        },10000)
        setTimeout(function(){
            img_id="selfie3"
            takepic()
            bolo="Taking the third picture"
            bolo1=new SpeechSynthesisUtterance(bolo)
            apispeak.speak(bolo1)
            },10000)
            setTimeout(function(){
                img_id="selfie4"
                takepic()
                bolo="Taking the fourth picture"
                bolo1=new SpeechSynthesisUtterance(bolo)
                apispeak.speak(bolo1)
                },10000)

}
camera=document.getElementById("camera")
Webcam.set({width:500,height:400,image_format:"png",png_quality:90})
function takepic(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>'

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>'
            
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>'
            
        }
        if(img_id=="selfie4"){
            document.getElementById("result4").innerHTML='<img id="selfie4" src="'+data_uri+'"/>'
            
        }
    })
}
