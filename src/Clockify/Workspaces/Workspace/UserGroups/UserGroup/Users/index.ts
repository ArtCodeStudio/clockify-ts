import ClockifyAPI, {
  IPostable,
} from "../../../../../../Api/ClockifyApi/index.ts";
import User from "./User/index.ts";
import type { UserGroupType } from "../../../../../../Types/UserGroupType.ts";

export default class Users extends ClockifyAPI
  implements IPostable<UserGroupType> {
  workspaceId: string;
  userGroupId: string;

  constructor(apiKey: string, workspaceId: string, userGroupId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userGroupId = userGroupId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}/users`;
  }

  withId(userId: string): User {
    return new User(this._apiKey, this.workspaceId, this.userGroupId, userId);
  }

  /**
   * Add users to group
   */
  post(data: { userId: string }): Promise<UserGroupType> {
    return this.fetchPost<UserGroupType>(data, {});
  }
}
