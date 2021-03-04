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
  login: (email: string, password: string) => Promise<LoginResponse>;
  getUsers: () => Promise<UserResponse[]>;
  getUser: (id: string) => Promise<UserResponse>;
  createUser: (
    job_role: string,
    admission_date: string,
    birthdate: string,
    project: string,
    name: string,
    url: string
  ) => Promise<UserResponse>;
  updateUser: (
    job_role?: string,
    admission_date?: string,
    birthdate?: string,
    project?: string,
    name?: string,
    url?: string
  ) => Promise<UserResponse>;
  deleteUser: (id: string) => Promise<DeleteResponse>;
}
