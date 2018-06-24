const danger = document.getElementById('danger');
const fine = document.getElementById('fine');

danger.addEventListener('click', () => {
  let counter = 0;

  /* setTimeout of 0 sec is still async, we will skip the 
   * function within, but the code will still have to wait for
   * the loop to finish */

  setTimeout(() => {
    for (let i = 0; i < 100000000; i++) {
      counter += i;
    }

    console.log(`%c The loop is done: ${counter}`, 'background-color: #282a36; color: #5af78d; padding: .5rem;');
  }, 0);

  const terrible = `<h1 style="color: red; font-family: 'Comic Sans MS'; font-size: 8rem;">TERRIBLE!! DON'T HOG THE THREAD!</h1>`;
  console.log(`%c Whoops, missed the loop: ${counter}`, 'background-color: #282a36; color: #fc1e5c; padding: .5rem');

  document.body.insertAdjacentHTML('beforeend', terrible);
});

fine.addEventListener('click', () => {
  const img = `<img src="images/quokka.jpg" alt="A picture of the animal Quokka." />`;
  document.body.insertAdjacentHTML('beforeend', img);
});
