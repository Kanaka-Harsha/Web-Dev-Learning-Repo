window.onload = function()
{
    const car=document.getElementById('playCar');
    const aero=document.getElementById('playAero');
    const train=document.getElementById('playTrain');
    const ship=document.getElementById('playShip');
    const bird=document.getElementById('playBird');
    const stop=document.getElementById('stop');
    let carSound=new Audio('sounds/car.mp3');
    let aeroSound=new Audio('sounds/plane.mp3');
    let trainSound=new Audio('sounds/train.mp3');
    let shipSound=new Audio('sounds/ship.mp3');
    let birdSound=new Audio('sounds/bird.mp3');
    car.addEventListener("click", function(){
        carSound.currentTime = 0;
        carSound.play();
        aeroSound.pause();
        trainSound.pause();
        shipSound.pause();
        birdSound.pause();
    });
    aero.addEventListener("click", function(){
        aeroSound.currentTime = 0;
        carSound.pause();
        aeroSound.play();
        trainSound.pause();
        shipSound.pause();
        birdSound.pause();

    });
    train.addEventListener("click", function(){
        trainSound.currentTime = 0;
        carSound.pause();
        aeroSound.pause();
        trainSound.play();
        shipSound.pause();
        birdSound.pause();
    });
    ship.addEventListener("click", function(){
        shipSound.currentTime = 0;
        carSound.pause();
        aeroSound.pause();
        trainSound.pause();
        shipSound.play();
        birdSound.pause();
    });
    bird.addEventListener("click", function(){
        birdSound.currentTime = 0;
        carSound.pause();
        aeroSound.pause();
        trainSound.pause();
        shipSound.pause();
    birdSound.play();
    });

    stop.addEventListener("click", function(){
        carSound.pause();
        aeroSound.pause();
        trainSound.pause();
        shipSound.pause();
        birdSound.pause();
    });
    carSound.currentTime = 0;
    aeroSound.currentTime = 0;
    trainSound.currentTime = 0;
    shipSound.currentTime = 0;
    birdSound.currentTime = 0;
}


/*In this JS code, I have used many functions, here are the following functions I used:

1.) "window-onLoad()"  this function is used to load the entire javascript immediatly after page reloads.

2.) " .getElementById('ID')"  this function is used to get the element if the html page, with its ID.

3.) "new Audio('Link')"  this function is used to set audio to the variable.

4.) "variable.play/pause(')"  this function is used to either play or pause the audio, specified to the variable in the "new Audio()" function

4.) "variable.addEventListener('event', function())"  this function is used to see if there is any button or checkbox, or a key press event happening. If there is any such event, the "function()" is made to run.*/