import { AxiosResponse } from 'axios';
import client from './api.client';
import { APIServiceInterface, LoginResponse } from './api.interface';

export class APIServiceSingleton implements APIServiceInterface {
  public constructor() {
    console.log('APIService has started');
  }

  public login = async (
    email: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> => {
    const data = {
      email: email,
      password: password,
    };
    return await client.post('/login', data);
  };

  public getUsers = async (): Promise<AxiosResponse> => {
    return await client.get('/navers');
  };

  public getUser = async (id: string): Promise<AxiosResponse> => {
    return await client.get(`/navers/${id}`);
  };

  public createUser = async (
    name: string,
    job: string,
    birth: string,
    admission_date: string,
    project: string,
    photoUrl: string
  ) => {
    const body = {
      name: name,
      job_role: job,
      birthdate: birth,
      admission_date: admission_date,
      project: project,
      url: photoUrl,
    };
    return await client.post('/create', body);
  };

  public updateUser = async (
    id: string,
    name?: string,
    job?: string,
    birth?: string,
    admission_date?: string,
    project?: string,
    photoUrl?: string
  ) => {
    const body = {
      name: name,
      job_role: job,
      birthdate: birth,
      admission_date: admission_date,
      project: project,
      url: photoUrl,
    };
    return await client.put(`/navers/${id}`, body);
  };

  public deleteUser = async (id: string): Promise<AxiosResponse> => {
    return await client.delete(`/navers/${id}`);
  };
}

export const APIService = new APIServiceSingleton();
