import { AxiosInstance } from "axios";
import { Query } from "../../Queries/Query";
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
  _api: AxiosInstance;
  constructor(apiKey: string);
  resourceSubPath(): string;
  clockifyApiInstance(apiKey: string): AxiosInstance;
  fetchGet<T>(query?: Query): Promise<T>;
  fetchPost<T>(data?: {}, query?: Query): Promise<T>;
  fetchPut<T>(data?: {}, query?: Query): Promise<T>;
  fetchPatch<T>(data?: {}, query?: Query): Promise<T>;
  fetchDelete<T>(query?: Query): Promise<T>;
}
