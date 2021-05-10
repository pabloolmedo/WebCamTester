
const videoEl = document.getElementById("webcam-vid");

const startWebCam = () => {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ 
                video: true 
            })
            .then(stream => {
                videoEl.srcObject = stream;
            })
            .catch(error => { console.log('something went wrong', error) })
    }
}

const stopWebCam = () => {
 var stream = videoEl.srcObject;
 var tracks = stream.getTracks();

 for (let i = 0; i < tracks.length; i++) {
     var track = tracks[i];
     track.stop();
     
 }

 videoEl.srcObject = null;
}