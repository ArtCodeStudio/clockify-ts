import ClockifyAPI, { IGettable } from "../../Api/ClockifyApi/index.ts";
import Workspace from "./Workspace/index.ts";
import type { WorkspaceType } from "../../Types/WorkspaceType.ts";

export default class Workspaces extends ClockifyAPI
  implements IGettable<WorkspaceType[]> {
  resourceSubPath(): string {
    return "/workspaces";
  }

  withId(workspaceId: string): Workspace {
    return new Workspace(this._apiKey, workspaceId);
  }

  get(): Promise<WorkspaceType[]> {
    return this.fetchGet<WorkspaceType[]>();
  }
}
