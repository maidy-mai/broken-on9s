window.onload = function(){
    var img = document.getElementById("oscat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mov");

    img.addEventListener('mousedown', function(){
        audio.pause();
        audio.currentTime = 0;
        increaseScore();
        if (score < 1118){
            img.src = 'oscat2.png';
        } else {
            img.src = 'oscat2red.png';
        }
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        if (score < 1118){
            img.src = 'oscat1.png';
        } else {
            img.src = 'oscat1red.png';
        }
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}