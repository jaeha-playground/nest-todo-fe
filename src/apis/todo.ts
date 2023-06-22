import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from './config';

export const useCreateTodoAPI = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, any>
) => {
  const queryKey = `/todos/create`;
  const mutationFn = (data: any) =>
    axiosInstance.post(queryKey, data).then((res) => res.data);

  return useMutation({ mutationFn, ...options });
};
