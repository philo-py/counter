window.addEventListener('DOMContentLoaded',() => {
  const countBtn = document.querySelector('#countBtn');
  const counter =document.querySelector('#counter');

  let count = 0;

  countBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    //スタイルを数値によって変化させる
    if (count >= 5 && count < 10) {
      counter.style.color = 'blue';
      counter.style.fontSize = '60px';
    }else if (count >= 10) {
      counter.style.color = 'red';
      counter.style.fontSize = '72px';
      document.body.style.backgroundColor = '#ffe4e1';
    }
  });
});