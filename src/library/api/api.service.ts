import { AxiosResponse } from 'axios';
import client from './api.client';
import { APIServiceInterface } from './api.interface';

export class APIServiceSingleton {
  // implements APIServiceInterface
  public constructor() {
    console.log('APIService has started');
  }

  public getUsers = async (): Promise<AxiosResponse> => {
    return await client.get('/navers');
  };
}

export const APIService = new APIServiceSingleton();

// import axios, { AxiosInstance } from 'axios';
// import { APIServiceInterface, LoginResponse } from './api.interface';
// // export type AxiosConfig = {
// //   baseURL: string;
// //   headers: {
// //     'Content-Type': 'application/json';
// //   };
// // };

// export class APIServiceSingleton
// // implements APIServiceInterface
// {
//   private readonly _axios: AxiosInstance;

//   public constructor() {
//     this._axios = axios.create({
//       baseURL: "https://navedex-api.herokuapp.com/v1"
//     });
//     console.log('APIService has started');
//   }

//   public async login(email: string, password: string): Promise<LoginResponse> {
//     try {
//       const response = await this._axios({
//         url:
//       })
//     }
//   }
// }
