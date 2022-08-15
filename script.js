function move(el) {
  let div = document.getElementsByClassName("container-button");

  let width = Math.ceil(el.clientWidth);
  let height = Math.ceil(el.clientHeight);

  let wdh = Math.floor(div[0].clientHeight);
  let wdw = Math.floor(div[0].clientWidth);

  var changeTop = Math.floor(Math.random() * (wdh - height + 1));
  var changeLeft = Math.floor(Math.random() * (wdw - width + 1));
  console.log("Height: " + changeTop + " Width: " + changeLeft);

  el.style.marginTop = changeTop + "px";
  el.style.marginLeft = changeLeft + "px";
}

function setHeart(element) {
  document.getElementById("button").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("heart").style.display = "block";
  document.getElementsByClassName(
    "container-title"
  )[0].innerHTML = `<h1>Então entre em contato no <a href='https://wa.me/5511965916832'>(11) 96591-6832</a> ;)</h1>`;
  playSong();
}

function playSong() {
  let snd = new Audio("love.mp3");
  snd.play();
}
