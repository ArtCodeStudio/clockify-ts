// import axios, { AxiosInstance } from "axios";
import ClockifyAPI from "../ClockifyApi/index.ts";

export default class ReportsApi extends ClockifyAPI {
  _baseURL = "https://reports.api.clockify.me/v1";

  // clockifyApiInstance(apiKey: string): AxiosInstance {
  //   return axios.create({
  //     baseURL: "https://reports.api.clockify.me/v1",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-Api-Key": apiKey,
  //     },
  //   });
  // }
}
