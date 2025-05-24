import '../styles/style.css';
import openingImage1 from '../assets/opening.png';

document.addEventListener('DOMContentLoaded', () => {
  createOpening();
});

function createOpening() {
  const container = document.createElement('div');
  container.classList.add('opening-container');

  const img = document.createElement('img');
  img.src = openingImage1;
  img.alt = 'Opening Image';

  const loginBtn = document.createElement('button');
  loginBtn.textContent = 'Login';

  const registerBtn = document.createElement('button');
  registerBtn.textContent = 'Register';

  container.appendChild(img);
  container.appendChild(loginBtn);
  container.appendChild(registerBtn);

  document.body.appendChild(container);
}
