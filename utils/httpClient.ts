import { getAuthToken } from "./jwtToken";

const BASE_URL = 'https://dev.api.heightful.com';

export const apiRequest = async (endpoint: string, method = 'GET', body?: any) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = await getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const api_url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(api_url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    return await response.json();
  } catch (error) {
    console.error('httpClient Request Error:', error);
    throw error;
  }
};

export const getRequest = async (endpoint: string) => {
  return apiRequest(endpoint, 'GET');
};

export const postRequest = async (endpoint: string, body: any) => {
  return apiRequest(endpoint, 'POST', body);
};

