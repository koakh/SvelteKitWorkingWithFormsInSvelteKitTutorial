import { API_KEY_SECRET } from '$env/static/private';

export const getAuthHeader = () => {
  return { 
    'Authorization': `Bearer ${API_KEY_SECRET}` 
  };

}