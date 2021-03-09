import { AxiosResponse } from 'axios';
import client from './api.client';
import { APIServiceInterface } from './api.interface';

export class APIServiceSingleton implements APIServiceInterface {
  public constructor() {
    client.interceptors.request.use((config) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MTQ4MjMyNzN9.CbP_fjTUPDz6LzyNLahX8oU-kJg__fFoHfk4eW9_-i4';

      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      return config;
    });
    console.log('APIService has started');
  }

  public login = async (
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    const body = {
      email: email,
      password: password,
    };
    return await client.post('users/login', body);
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
  ): Promise<AxiosResponse> => {
    const body = {
      name: name,
      job_role: job,
      birthdate: birth,
      admission_date: admission_date,
      project: project,
      url: photoUrl,
    };
    return await client.post('/navers', body);
  };

  public updateUser = async (
    id: string,
    name?: string,
    job?: string,
    birth?: string,
    admission_date?: string,
    project?: string,
    photoUrl?: string
  ): Promise<AxiosResponse> => {
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
