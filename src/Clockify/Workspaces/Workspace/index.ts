import ClockifyAPI from "../../../Api/ClockifyApi/index.ts";
import Users from "./Users/index.ts";
import Clients from "./Clients/index.ts";
import Projects from "./Projects/index.ts";
import Tags from "./Tags/index.ts";
import CustomFields from "./CustomFields/index.ts";
import TimeEntries from "./TimeEntries/index.ts";
import UserGroups from "./UserGroups/index.ts";
import Reports from "./Reports/index.ts";

export default class Workspace extends ClockifyAPI {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}`;
  }

  get clients(): Clients {
    return new Clients(this._apiKey, this.workspaceId);
  }

  get customFields(): CustomFields {
    return new CustomFields(this._apiKey, this.workspaceId);
  }

  get projects(): Projects {
    return new Projects(this._apiKey, this.workspaceId);
  }

  get tags(): Tags {
    return new Tags(this._apiKey, this.workspaceId);
  }

  get timeEntries(): TimeEntries {
    return new TimeEntries(this._apiKey, this.workspaceId);
  }

  get userGroups(): UserGroups {
    return new UserGroups(this._apiKey, this.workspaceId);
  }

  get users(): Users {
    return new Users(this._apiKey, this.workspaceId);
  }

  get reports(): Reports {
    return new Reports(this._apiKey, this.workspaceId);
  }
}
