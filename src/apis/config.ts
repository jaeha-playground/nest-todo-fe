import axios, { AxiosInstance } from 'axios';

export const baseURL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
