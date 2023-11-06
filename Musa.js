let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let cIcon = document.getElementById("cIcon");
let src = document.querySelector(".src").getAttribute('name');

function PlayPause() {
  if (cIcon.getAttribute("src") === "/Code Class/caret/circle-pause-regular.svg") {
    song.pause();
    cIcon.setAttribute("src", "/Code Class/caret/circle-play-regular.svg");
  } else {
    song.play();
    cIcon.setAttribute("src", "/Code Class/caret/circle-pause-regular.svg");
  }
};
console.log(src)
let ame = document.querySelector('.name');
console.log(ame)
ame.innerText = (src);

progress.max = song.duration;
progress.value = song.currentTime;

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 5);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  song.play();
  cIcon.setAttribute("src", "/Code Class/caret/circle-pause-regular.svg");
};