// import axios, { AxiosInstance } from "axios";
import ClockifyAPI from "../ClockifyApi/index.ts";

export default class ReportsApi extends ClockifyAPI {
  _baseURL = "https://reports.api.clockify.me/v1";
}
