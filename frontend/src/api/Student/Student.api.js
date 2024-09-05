import axios from 'axios';

// Base URL for API requests
const baseURL = process.env.REACT_APP_BASE_URL;

// Function to get the authentication token from local storage
const getAuthToken = () => localStorage.getItem('authToken');

// Create an Axios instance for API calls
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the auth token in all requests
apiClient.interceptors.request.use(config => {
  const token = getAuthToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

// Student login function
export const studentLogin = async (email, password) => {
  try {
    const response = await apiClient.post('/api/login/student', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Change student password
export const changeStudentPassword = async ({ email, oldPassword, newPassword }) => {
  try {
    const response = await apiClient.post('/api/student/change-password', { email, oldPassword, newPassword });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Fetch applied companies
export const fetchAppliedCompanies = async () => {
  try {
    const response = await apiClient.get('/student/applied');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Fetch student education details
export const fetchStudentEducation = async () => {
  try {
    const response = await apiClient.get('/student/education');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Fetch upcoming companies
export const fetchUpcomingCompanies = async () => {
  try {
    const response = await apiClient.get('/student/upcoming-companies');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
