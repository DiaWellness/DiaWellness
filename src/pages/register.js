const Register = {
  render() {
    return `
      <div class="register-container">
        <h2>Daftar Akun Baru</h2>
        <form id="registerForm">
          <input type="text" id="name" placeholder="Nama Lengkap" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Daftar</button>
        </form>
        <p>Sudah punya akun? <a href="#/login">Masuk di sini</a></p>
      </div>
    `;
  },

  afterRender() {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // TODO: Panggil API register
      alert(`Nama: ${name}\nEmail: ${email}\nPassword: ${password}`);
      // Contoh redirect:
      // window.location.hash = '#/login';
    });
  },
};

export default Register;
