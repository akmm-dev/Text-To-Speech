let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector('#Selection');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=> (voiceSelect.options[i]= new Option(voice.name,i)))
 };

voiceSelect.addEventListener('change', function () {
     speech.voice = voices[voiceSelect.value];
 })
function Speech() {
    speech.text = document.querySelector('#Text').value;
    console.log(speech.text);
    window.speechSynthesis.speak(speech);
}