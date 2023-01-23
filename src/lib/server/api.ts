import { API_URL } from '$env/static/private';
import { getAuthHeader } from '$lib/server/utils';

export const validateToken = async <T>(token: string): Promise<T> => {
  const res = await fetch(`${API_URL}/validate-token/${token}`)
  const data = await res.json()
  return data;
}

export const getCountries = async <T>(): Promise<T> => {
  const res = await fetch(`${API_URL}/customer/countries`, {
    headers: getAuthHeader()
  });
  const data = await res.json()
  return data;
}
