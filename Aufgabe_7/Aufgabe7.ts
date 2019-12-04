//Button 1//
window.addEventListener('load', function(){
    document.querySelector('#button1').addEventListener('click', function(){playSample("kick.mp3");});
});

//Button 2//
window.addEventListener('load', function(){
    document.querySelector('#button2').addEventListener('click', function(){playSample("snare.mp3");});
});

//Button 3//
window.addEventListener('load', function(){
    document.querySelector('#button3').addEventListener('click', function(){playSample("hihat.mp3");});
});

//Button 4//
window.addEventListener('load', function(){
    document.querySelector('#button4').addEventListener('click', function(){playSample("F.mp3");});
});

//Button 5//
window.addEventListener('load', function(){
    document.querySelector('#button5').addEventListener('click', function(){playSample("G.mp3");});
});

//Button 6//
window.addEventListener('load', function(){
    document.querySelector('#button6').addEventListener('click', function(){playSample("A.mp3");});
});

//Button 7//
window.addEventListener('load', function(){
    document.querySelector('#button7').addEventListener('click', function(){playSample("C.mp3");});
});

//Button 8//
window.addEventListener('load', function(){
    document.querySelector('#button8').addEventListener('click', function(){playSample("laugh-1.mp3");});
});

//Button 9//
window.addEventListener('load', function(){
    document.querySelector('#button9').addEventListener('click', function(){playSample("laugh-2.mp3");});
});

//Audio Funktion//
function playSample(beat: string){
    console.log('Klick');
    var sound:HTMLAudioElement = new Audio('assets/' + beat);
    sound.play();
}


//Array//

function playButton(){
var sound: string[] = ["kick.mp3","snare.mp3","hihat.mp3", "F.mp3", "G.mp3", "A.mp3", "C.mp3", "laugh-1.mp3", "laugh-2.mp3"]
var index: number = 0;
console.log(sound[index]);
setInterval(function() {
    console.log(index);
    playSample(sound[index]);
    index++;
}, 500)};

window.addEventListener('load', function(){
    document.querySelector('#playbutton').addEventListener('click', playButton);
});
