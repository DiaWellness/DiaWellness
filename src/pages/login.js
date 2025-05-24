const Login = {
  render() {
    return `
      <div class="login-container">
        <h2>Login to Diawellness</h2>
        <form id="loginForm">
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Belum punya akun? <a href="#/register">Daftar di sini</a></p>
      </div>
    `;
  },

  afterRender() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // TODO: Panggil API login
      alert(`Email: ${email}\nPassword: ${password}`);
      // Contoh redirect:
      // window.location.hash = '#/home';
    });
  },
};

export default Login;
