import { AxiosResponse } from 'axios';

// export type LoginResponse = {
//   email: string;
//   id: string;
//   token: string;
// };

export type UserInterface = {
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  id: string;
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
  login: (email: string, password: string) => Promise<AxiosResponse>;
  getUsers: () => Promise<AxiosResponse>;
  getUser: (id: string) => Promise<AxiosResponse>;
  createUser: (
    job_role: string,
    admission_date: string,
    birthdate: string,
    project: string,
    name: string,
    url: string
  ) => Promise<AxiosResponse>;
  updateUser: (
    id: string,
    job_role?: string,
    admission_date?: string,
    birthdate?: string,
    project?: string,
    name?: string,
    url?: string
  ) => Promise<AxiosResponse>;
  deleteUser: (id: string) => Promise<AxiosResponse>;
}
