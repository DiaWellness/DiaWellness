const Auth = {
  saveToken(token) {
    localStorage.setItem('token', token);
  },
  getToken() {
    return localStorage.getItem('token');
  },
  logout() {
    localStorage.removeItem('token');
  },
};

export default Auth;
