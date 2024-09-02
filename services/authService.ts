import { postRequest } from '../utils/httpClient';

export const loginUser = async (username: string, password: string) => {
    try {
      const data = await postRequest('/v1/auth/sessions', { username, password });
  
      return data;
    } catch (error) { 
      console.error('Registration failed:', error);
      throw error;
    }
  };
  

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const data = await postRequest('/v1/auth/accounts', { username, email, password });

    return data;
  } catch (error) { 
    console.error('Registration failed:', error);
    throw error;
  }
};
