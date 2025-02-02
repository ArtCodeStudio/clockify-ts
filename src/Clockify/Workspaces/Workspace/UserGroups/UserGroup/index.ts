import ClockifyAPI, {
  IDeletable,
  IPuttable,
} from "../../../../../Api/ClockifyApi/index.ts";
import Users from "./Users/index.ts";
import type { UserGroupType } from "../../../../../Types/UserGroupType.ts";

export default class UserGroup extends ClockifyAPI
  implements IPuttable<UserGroupType>, IDeletable<UserGroupType> {
  workspaceId: string;
  userGroupId: string;

  constructor(apiKey: string, workspaceId: string, userGroupId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userGroupId = userGroupId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}`;
  }

  get users(): Users {
    return new Users(this._apiKey, this.workspaceId, this.userGroupId);
  }

  /**
   * Update group name
   */
  put(data: { name: string }): Promise<UserGroupType> {
    return this.fetchPut<UserGroupType>(data, {});
  }

  /**
   * Delete group
   */
  delete(): Promise<UserGroupType> {
    return this.fetchDelete<UserGroupType>({});
  }
}
