const danger = document.getElementById('danger');
const fine = document.getElementById('fine');

danger.addEventListener('click', () => {
  let counter = 0;
  // Only one action can be performed, if that action
  // takes time, we have to wait for it to finish.
  for (let i = 0; i < 10000000000; i++) {
    counter += i;
  }
  // This will run when the loop is finished
  const terrible = `<h1 style="color: red; font-family: 'Comic Sans MS'; font-size: 8rem;">TERRIBLE!! DON'T HOG THE THREAD!</h1>`
  document.body.insertAdjacentHTML('beforeend', terrible);
  console.log(`%c The loop is done: ${counter}`, 'background-color: #282a36; color: #5af78d; padding: .5rem;');

})

fine.addEventListener('click', () => {
  const img = `<img src="images/quokka.jpg" alt="A picture of the animal Quokka." />`
  document.body.insertAdjacentHTML('beforeend', img);
})