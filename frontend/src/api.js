import axios from 'axios';

// Backend URL from environment variable
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Example API function
export const testAPI = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/ai/test`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Agar aur API endpoints hain, yahan define kar sakte ho
export const getAIResponse = async (input) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/ai/query`, { input });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
