import ClockifyAPI from "../Api/ClockifyApi/index.ts";
import Users from "./Users/index.ts";
import Workspaces from "./Workspaces/index.ts";

export default class Clockify extends ClockifyAPI {
  workspace: Workspaces;

  constructor(apiKey: string) {
    super(apiKey);
    this.workspace = new Workspaces(apiKey);
  }

  get user(): Users {
    return new Users(this._apiKey);
  }

  get workspaces(): Workspaces {
    return new Workspaces(this._apiKey);
  }
}
