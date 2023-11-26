//------------------------------>mizoneTime con date<------------------------------

let txt = document.getElementById('text')

// time
const veriZerosTime = n => {
if(n.toString().length < 2) return `0${n}`
	return n
}
const veriZerosTime2 = n =>{
	if(n.toString().length < 3) return `0${n}`
		else if (n.toString().length < 2) return `00${n}`
	return n
}

const funcionRecursiva = () =>{
 const data = new Date();
 let hora = data.getHours();
 let minuto = data.getMinutes();
 let segundos = data.getSeconds();
 let milesegundos = data.getMilliseconds()
 txt.innerHTML = `${veriZerosTime(hora)} : ${veriZerosTime(minuto)} : ${veriZerosTime(segundos)} : ${veriZerosTime2(milesegundos)}`
 setTimeout(funcionRecursiva,1)
}

funcionRecursiva()
// chronometer
 // documents 
const objDocuments = {
 pHours : document.getElementById('timeHoursP'),
 pMinutes : document.getElementById('timeMinutesP'),
 pSeconds : document.getElementById('timeSecondsP'),
 inputHours : document.getElementById('timeHours'),
 inputMinutes : document.getElementById('timeMinute'),
 inputSeconds : document.getElementById('timeSeconds'),
 containerPrompt : document.querySelector('.promptChronometer'),
 containerLoadTime : document.querySelector('.containerOfTimeLoad'),
 buttonCancelar : document.getElementById('cancela_chronometer'),
 url : document.getElementById('url'),
 section : document.getElementById('sectionForVideoUrl'),
 iframeYotube : document.getElementById('inframeYoutube'),
 buttonQuitarSection : document.getElementById('quitarSectionVideoYoutube')
}

 // --> functions
function obtenerIDdeURL(url) {
  var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  
  var match = url.match(regExp);

  return match ? match[1] : null;
}

async function init_close_ChronometerFunction(){
	if(objDocuments.url.value.length > 1){ 
    objDocuments.section.style.display = 'flex';
var idVideo = await obtenerIDdeURL(objDocuments.url.value)
let peticion =  onYouTubeIframeAPIReady()
var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '315',
                width: '560',
                videoId: idVideo,
                playerVars: {
                    'autoplay': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange' : onPlayerStateChange
                }
            });
        }
 function onPlayerStateChange(event){
 	if(event.data === YT.PlayerState.ENDED){
 		player.seekTo(0);
 		player.playVideo()
 	}
 } 
       function onPlayerReady(event) {
            event.target.playVideo();
            objDocuments.buttonQuitarSection.addEventListener('click',()=>{
            objDocuments.section.style.display = 'none';
            location.reload()
})
        }
}else{
    objDocuments.pHours.style.display = 'inline-block';
    objDocuments.pMinutes.style.display = 'inline-block';
    objDocuments.containerPrompt.style.display = 'flex';
    objDocuments.containerLoadTime.style.display = 'none';
	objDocuments.buttonCancelar.style.display = 'none';
}
	objDocuments.buttonCancelar.removeEventListener('click',()=>{continues = false;})
}
const funcionChronometer = (hours,minute,seconds) => {
	objDocuments.buttonCancelar.style.display = 'block'
	objDocuments.containerPrompt.style.display = 'none';
objDocuments.containerLoadTime.style.display = 'block';
let continues = true;
	objDocuments.buttonCancelar.addEventListener('click',()=>{continues = false;})
let horas = hours;
let minutos = minute;
let segundos = seconds;
const veriZeros = n => {
if(n.toString().length < 2) return `0${n}`
	return n
}
const recursividad = () => { // recursividad para el load time
segundos --
if(segundos === 0 && minutos >= 1) {minutos --;segundos = 59; console.log('funcion 1')}
else if(segundos === 0 && minutos < 1) {minutos = 0;segundos = 0; console.log('funcion 2')}
if(minutos === 0 && horas >= 1){horas --;minutos = 59; console.log('funcion 3')}
else if (minutos === 0 && horas < 1) minutos = 0
if(horas < 1 && minutos < 1 && segundos < 1) continues = false;
 horas > 0 ? objDocuments.pHours.textContent = `${veriZeros(horas)} :` : objDocuments.pHours.style.display = 'none';
 minutos > 0 ? objDocuments.pMinutes.textContent = `${veriZeros(minutos)} :` : objDocuments.pMinutes.style.display = 'none';
 objDocuments.pSeconds.textContent = veriZeros(segundos)
 continues ? setTimeout (recursividad, 1000) : init_close_ChronometerFunction()
}
recursividad()

}
const copilatorDataTime = () => {
let dataHours;
let dataMinutes;
let dataSeconds;
dataHours = objDocuments.inputHours.value;
objDocuments.inputMinutes.value < 1 ? dataMinutes = 0 : dataMinutes = objDocuments.inputMinutes.value;
objDocuments.inputSeconds.value < 1 ? dataSeconds = 59 : dataSeconds = objDocuments.inputSeconds.value;
objDocuments.inputHours.value < 0 ? dataHours = 0 : dataHours = objDocuments.inputHours.value;
funcionChronometer(dataHours,dataMinutes,dataSeconds)
}
const init_verificaionDataTime = () => {
if(isNaN(objDocuments.inputHours.value) || isNaN(objDocuments.inputMinutes.value) || isNaN(objDocuments.inputSeconds.value)){
let arrayVerificacionInputIsNaN = Object.values(objDocuments);
 arrayVerificacionInputIsNaN.forEach(e => {if(isNaN(e.value)) e.focus()})
}
else  copilatorDataTime()
}
 // --> Events


document.getElementById('init_chronometer').addEventListener('click',  init_verificaionDataTime)


