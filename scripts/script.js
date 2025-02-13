// Функция для создания сердечек
function createHearts(count, isBroken = false) {
    const heartContainer = document.querySelector('.heart-container');
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heart.style.opacity = Math.random();
        heart.style.backgroundImage = isBroken ? "url('broken_heart.png')" : "url('heart.png')";
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}


document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'congratulations.html';
});

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];




btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'sad.html';
});

var but = document.getElementById("no");

but.onclick = function() {
    modal.style.display = "none";
}


