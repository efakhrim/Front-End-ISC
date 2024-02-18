import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Apply the token to the Authorization header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token, remove Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
