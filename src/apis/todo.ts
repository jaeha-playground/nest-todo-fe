import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from './config';

interface ITodo {}

export const useCreateTodoAPI = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, any>
) => {
  const queryKey = `/todos/create`;
  const mutationFn = (data: any) =>
    axiosInstance.post(queryKey, data).then((res) => res.data);

  return useMutation({ mutationFn, ...options });
};

export const useGetSpecificTodoAPI = (
  id: number,
  options?: UseQueryOptions<
    AxiosResponse<unknown>,
    AxiosError,
    string,
    string[]
  >
) => {
  const queryKey = `/todos/${id}`;
  const queryFn = () => axiosInstance.get(queryKey).then((res) => res.data);

  return useQuery({ queryKey: [queryKey], queryFn });
};

export const useUpdateTodoAPI = (
  id: number,
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, any>
) => {
  const queryKey = `/todos/update/${id}`;
  const mutationFn = (data: any) =>
    axiosInstance.put(queryKey, data).then((res) => res.data);

  return useMutation({ mutationFn, ...options });
};
