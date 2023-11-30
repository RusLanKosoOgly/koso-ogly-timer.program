
const GmailInput = document.querySelector('#gmail_input');
const GmailButton = document.querySelector('#gmail_button');
const GmailSpan = document.querySelector('#gmail_result');

const reqExp = /(.*\@yandex.com)|(.*\@mail.ru)|(.*\@gmail.com)$/;

GmailButton.addEventListener('click', ()=>{
    if (reqExp.test(GmailInput.value)){
        GmailSpan.innerHTML = 'This number is True';
        GmailSpan.style.color = 'green';
    }else {
        GmailSpan.innerHTML = 'This number is False';
        GmailSpan.style.color = 'red';
    }
})
window.onload = function() {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');

    let posX = 0;
    let posY = 0;

    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;


    function moveRight() {
      const interval = setInterval(() => {
        if (posX >= parentWidth - childBlock.offsetWidth) {
          clearInterval(interval);
          moveDown();
        } else {
          posX += 1;
          childBlock.style.left = posX + 'px';
        }
      }, 10);
    }


    function moveDown() {
      const interval = setInterval(() => {
        if (posY >= parentHeight - childBlock.offsetHeight) {
          clearInterval(interval);
        } else {
          posY += 1;
          childBlock.style.top = posY + 'px';
        }
      }, 10);
    }

    childBlock.style.left = posX + 'px';
    childBlock.style.top = posY + 'px';

    setTimeout(() => {
      moveRight();
    }, 1000);


  };

 let timer;
  let startTime;
  let isRunning = false;

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startTime = new Date().getTime();
      timer = setInterval(updateTimer, 10);
    }
  }

  function stopTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
    }
  }

  function resetTimer() {
    stopTimer();
    document.getElementById('timer').innerHTML = '0.000';
  }

  function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = elapsedTime % 1000;

    const timerDisplay = `${seconds}.${String(milliseconds).padStart(3, '0')}`;
    document.getElementById('timer').innerHTML = timerDisplay;
  }

 document.getElementById('startBtn').addEventListener('click', startTimer);
  document.getElementById('stopBtn').addEventListener('click', stopTimer);
  document.getElementById('resetBtn').addEventListener('click', resetTimer);
