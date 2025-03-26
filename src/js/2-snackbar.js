import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const checked = form.querySelector('[name="state"]:checked').value;
  const delay = form.querySelector('[name="delay"]').value;
  // console.log(delay);
  // console.log(checked);

  // console.log('Form submitted');
  // console.log(event);
  // console.log(form.elements);
  // console.log(form.elements[3]);
  // console.log(form.elements[2]);
  // console.log(checked);
  // console.log(checked.value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checked === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  form.reset();
  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        timeout: 1000,
        progressBar: false,
        close: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        timeout: 1000,
        progressBar: false,
        close: false,
      });
    });
});
