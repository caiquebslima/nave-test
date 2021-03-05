import { AxiosResponse } from 'axios';

export type LoginResponse = {
  email: string;
  id: string;
  token: string;
};

export type UserResponse = {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
};

export type DeleteResponse = {
  name: string;
  message: string;
  deleted: boolean;
  statusCode: number;
  errorCode: number;
};

export interface APIServiceInterface {
  // signUp: (email: string, password: string) => Promise<any>;
  login: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<LoginResponse>>;
  getUsers: () => Promise<AxiosResponse>;
  getUser: (id: string) => Promise<AxiosResponse<UserResponse>>;
  createUser: (
    job_role: string,
    admission_date: string,
    birthdate: string,
    project: string,
    name: string,
    url: string
  ) => Promise<AxiosResponse<UserResponse>>;
  updateUser: (
    id: string,
    job_role?: string,
    admission_date?: string,
    birthdate?: string,
    project?: string,
    name?: string,
    url?: string
  ) => Promise<AxiosResponse<UserResponse>>;
  deleteUser: (id: string) => Promise<AxiosResponse<DeleteResponse>>;
}
