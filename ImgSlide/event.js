document.querySelector('.button2').addEventListener('click', function () {
  // button2를 찾고, 클릭하면 function을 실행해라
  document.querySelector('.container').style.transform = 'translate(-100vw)';
});

document.querySelector('.button3').addEventListener('click', function () {
  document.querySelector('.container').style.transform = 'translate(-200vw)';
});

document.querySelector('.button1').addEventListener('click', function () {
  document.querySelector('.container').style.transform = 'translate(0)';
});
