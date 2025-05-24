import openingImage from '../assets/opening.png';

const Opening = {
  render() {
    return `
      <div class="opening-container">
        <img src="${openingImage}" alt="Opening Image" />
        <button id="loginButton">Login</button>
        <button id="registerButton">Register</button>
      </div>
    `;
  },

  afterRender() {
    document.getElementById('loginButton').addEventListener('click', () => {
      window.location.hash = '#/login';
    });

    document.getElementById('registerButton').addEventListener('click', () => {
      window.location.hash = '#/register';
    });
  },
};

export default Opening;
