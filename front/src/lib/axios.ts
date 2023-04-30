import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from '@/constants'

class ApiClient {
  static createInstance() {
    const instance: AxiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    instance.interceptors.response.use(
      (config: AxiosResponse) => this.requestSuccess(config),
      (config: AxiosError) => this.requestFailure(config)
    );
    return instance;
  }

  static createInstanceFormData() {
    const instance: AxiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return instance;
  }

  static createInstanceBlob() {
    const instance: AxiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      responseType: "blob", // blob とは
    });
    return instance;
  }

  static requestFailure(config: AxiosError) {
    if (config.config && config.response) {
      if (config.config && config.response) {
        if (
          typeof window !== "undefined" &&
          window.location.pathname?.startsWith("/auth")
        ) {
          return this.requestSuccess(config.response);
        }
        if (config.response.status == 404) {
          return this.requestSuccess(config.response);
        }
      }
    }
    return Promise.reject(config);
  }

  static requestSuccess(response: any) {
    return response.data;
  }

  static async get(url: string, data?: object): Promise<any> {
    const instance = this.createInstance();
    return instance.get(url, data);
  }

  static async post(url: string, data?: object): Promise<any> {
    const instance = this.createInstanceFormData();
    return instance.post(url, data);
  }

  static async postFormData(url: string, data?: object): Promise<any> {
    const instance = this.createInstanceFormData();
    return instance.post(url, data);
  }

  static async put(url: string, data?: object): Promise<any> {
    const instance = this.createInstance();
    return instance.put(url, data);
  }

  static async putFormData(url: string, data?: object): Promise<any> {
    const instance = this.createInstanceFormData();
    instance.defaults.headers.post["X-HTTP-Method-Override"] = "PUT";
    return instance.post(url, data);
  }

  static async delete(url: string, data?: object): Promise<any> {
    const instance = this.createInstance();
    return instance.delete(url, data);
  }

  static async getBlob(url: string, data?: object): Promise<any> {
    const instance = this.createInstanceBlob();
    return instance.get(url, data);
  }
}

export default ApiClient;
