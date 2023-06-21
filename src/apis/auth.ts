import {
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from './config';

interface IJoin {
  email: string;
  nickname: string;
  password: string;
}

export const useJoinAPI = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IJoin>
) => {
  const queryKey = `/users/join`;
  const mutationFn = (data: IJoin) =>
    axiosInstance.post(queryKey, data).then((res) => res.data);

  // return useMutation({queryKey: [queryKey], queryFn: queryFn, {...options} })
  return useMutation({ mutationFn, ...options });
};
