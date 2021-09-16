import Summary from "./Summary/index.ts";
import ClockifyAPI from "../../../../Api/ClockifyApi/index.ts";
import Detailed from "./Detailed/index.ts";

export default class Reports extends ClockifyAPI {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  get summary(): Summary {
    return new Summary(this._apiKey, this.workspaceId);
  }

  get detailed(): Detailed {
    return new Detailed(this._apiKey, this.workspaceId);
  }
}
