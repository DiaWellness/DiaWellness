import openingImage from './assets/opening.png';

export function createOpening() {
  const app = document.getElementById('app');

  // Kosongkan konten app, jangan body
  app.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('opening-container');

  const img = document.createElement('img');
  img.src = openingImage;
  img.alt = 'Opening Image';

  const loginBtn = document.createElement('button');
  loginBtn.textContent = 'Login';
  loginBtn.addEventListener('click', () => {
    window.location.hash = '#/login';
  });

  const registerBtn = document.createElement('button');
  registerBtn.textContent = 'Register';
  registerBtn.addEventListener('click', () => {
    window.location.hash = '#/register';
  });

  container.append(img, loginBtn, registerBtn);
  app.appendChild(container);
}

// Jalankan saat load halaman
document.addEventListener('DOMContentLoaded', () => {
  createOpening();
});
