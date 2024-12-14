const API_URL = 'http://localhost/api';

export const api = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  async register(name, email, password) {
    const response = await fetch(`${API_URL}/auth/register.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return response.json();
  },

  async createAppointment(appointmentData) {
    const response = await fetch(`${API_URL}/appointments/create.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });
    return response.json();
  }
};