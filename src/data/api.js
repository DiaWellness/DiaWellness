import axios from 'axios';
import CONFIG from '../src/utils/config';
import Auth from '../src/utils/auth';

const API = {
  async login({ email, password }) {
    try {
      const response = await axios.post(`${CONFIG.BASE_URL}/login`, {
        email,
        password,
      });

      const { token } = response.data;
      if (token) {
        Auth.saveToken(token);
      }

      return response.data;
    } catch (error) {
      return {
        error: true,
        message: error.response?.data?.message || 'Login gagal',
      };
    }
  },

  async register({ name, email, password }) {
    try {
      const response = await axios.post(`${CONFIG.BASE_URL}/register`, {
        name,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return {
        error: true,
        message: error.response?.data?.message || 'Pendaftaran gagal',
      };
    }
  },

  async getUserProfile() {
    try {
      const response = await axios.get(`${CONFIG.BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`,
        },
      });

      return response.data;
    } catch (error) {
      return {
        error: true,
        message: error.response?.data?.message || 'Gagal mengambil profil',
      };
    }
  },

  logout() {
    Auth.logout();
  },
};

export default API;
