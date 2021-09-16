import { stringify } from "qs";
import { isJson } from "../../Utils/Json.ts";
// import axios, { AxiosInstance } from "axios";
import ClockifyError from "../../ClockifyError/index.ts";
import { Query } from "../../Queries/Query.ts";
import { FetchApiError } from "../../Types/FetchApiError.ts";

const paramsSerializer = (
  params:
    | Query
    | string
    | URLSearchParams
    | string[][]
    | Record<string, string>
    | undefined,
) =>
  stringify(params, {
    arrayFormat: "repeat",
    serializeDate: (d: Date) => d.toISOString(),
  });

export interface IGettable<T> {
  get(query: Query): Promise<T>;
}
export interface IPostable<T> {
  post(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IPuttable<T> {
  put(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IPatchable<T> {
  patch(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IDeletable<T> {
  delete(query: Query): Promise<T>;
}

export default class ClockifyAPI {
  _apiKey: string;
  //  _api: AxiosInstance;
  _baseURL = "https://api.clockify.me/api/v1";
  _headers = {
    "content-type": "application/json",
    "X-Api-Key": "",
  };

  constructor(apiKey: string) {
    this._apiKey = apiKey;
    this._headers["X-Api-Key"] = this._apiKey;
    // this._api = this.clockifyApiInstance(apiKey);
  }

  resourceSubPath(): string {
    return "";
  }

  // clockifyApiInstance(apiKey: string): AxiosInstance {
  //   return axios.create({
  //     baseURL: "https://api.clockify.me/api/v1",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-Api-Key": apiKey,
  //     },
  //   });
  // }

  getRequest(
    method: "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "HEAD",
    subPath: string,
    data?: Record<string, unknown>,
    query?: Query,
  ) {
    let body: string | undefined = undefined;
    let queryStr = "";

    if (query) {
      queryStr = paramsSerializer(query);
      if (queryStr) {
        const separator = subPath.includes("?") ? "&" : "?";
        queryStr = separator + queryStr;
      }
    }

    if (data && method !== "GET" && method !== "HEAD") {
      body = JSON.stringify(data);
    }

    const init: RequestInit = {
      method,
      headers: this._headers,
      body,
      mode: "cors",
      cache: "default",
    };

    const request = new Request(this._baseURL + subPath + queryStr, init);
    return request;
  }

  async makeRequest<T>(request: Request) {
    try {
      const res = await fetch(request);
      let data: any = await res.text();
      if (isJson(data)) {
        data = JSON.parse(data) as T;
      }

      if (!res.ok || res.status < 200 || res.status >= 300) {
        throw {
          request,
          response: res,
          data,
        } as FetchApiError;
      }

      return data;
    } catch (error) {
      throw new ClockifyError(error);
    }
  }

  axiosGet<T>(query: Query = {}): Promise<T> {
    const request = this.getRequest(
      "GET",
      this.resourceSubPath(),
      undefined,
      query,
    );
    return this.makeRequest<T>(request);
    // return this._api.get<T>(, {
    //   params: query,
    //   paramsSerializer,
    // })
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new ClockifyError(err);
    //   });
  }

  axiosPost<T>(data = {}, query: Query = {}): Promise<T> {
    const request = this.getRequest(
      "POST",
      this.resourceSubPath(),
      data,
      query,
    );
    return this.makeRequest<T>(request);

    // return this._api.post<T>(this.resourceSubPath(), data, {
    //   params: query,
    //   paramsSerializer,
    // })
    // .then((res) => res.data)
    // .catch((err) => {
    //   throw new ClockifyError(err);
    // });
  }

  axiosPut<T>(data = {}, query: Query = {}): Promise<T> {
    const request = this.getRequest(
      "PUT",
      this.resourceSubPath(),
      data,
      query,
    );
    return this.makeRequest<T>(request);
    // return this._api.put<T>(this.resourceSubPath(), data, {
    //   params: query,
    //   paramsSerializer,
    // })
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new ClockifyError(err);
    //   });
  }

  axiosPatch<T>(data = {}, query: Query = {}): Promise<T> {
    const request = this.getRequest(
      "PATCH",
      this.resourceSubPath(),
      data,
      query,
    );
    return this.makeRequest<T>(request);
    // return this._api.patch<T>(this.resourceSubPath(), data, {
    //   params: query,
    //   paramsSerializer,
    // })
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new ClockifyError(err);
    //   });
  }

  axiosDelete<T>(query: Query = {}): Promise<T> {
    const request = this.getRequest(
      "DELETE",
      this.resourceSubPath(),
      undefined,
      query,
    );

    return this.makeRequest<T>(request);

    // return this._api.delete<T>(this.resourceSubPath(), {
    //   params: query,
    //   paramsSerializer,
    // })
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new ClockifyError(err);
    //   });
  }
}
