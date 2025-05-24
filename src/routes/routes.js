import Opening from '../pages/opening.js';
// import Login from '../pages/login.js'; (nanti bisa ditambahkan)

const routes = {
  '/': Opening,
  '/login': () => import('../pages/login.js'),      // lazy load (nanti buat)
  '/register': () => import('../pages/register.js') // lazy load (nanti buat)
};

export default routes;
