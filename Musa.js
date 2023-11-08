let progress = document.querySelector('#progress')
let song = document.querySelector('#song')
let cIcon = document.querySelector('i')
let src = document.querySelector('.src').getAttribute('src')

function PlayPause () {
  if (cIcon.getAttribute('class') === 'fas fa-pause') {
    song.pause()
    cIcon.setAttribute('class', 'fas fa-play')
  } else {
    song.play()
    cIcon.setAttribute('class', 'fas fa-pause')
  }
}
let ame = document.querySelector('.name')
ame.innerText = src

progress.max = song.duration
progress.value = song.currentTime

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime
  }, 5)
}

progress.oninput = function () {
  song.currentTime = progress.value
  if (song.paused) {
    PlayPause()
  }
}
