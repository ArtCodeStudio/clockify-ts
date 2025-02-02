import ClockifyAPI, {
  IGettable,
  IPostable,
} from "../../../../Api/ClockifyApi/index.ts";
import User from "./User/index.ts";
import UsersQuery from "../../../../Queries/UsersQuery.ts";
import { NewUserType } from "../../../../Types/NewUserType.ts";
import type { MemberType } from "../../../../Types/MemberType.ts";
import type { UserType } from "../../../../Types/UserType.ts";

export default class Users extends ClockifyAPI
  implements IGettable<MemberType[]>, IPostable<UserType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  withId(userId: string): User {
    return new User(this._apiKey, this.workspaceId, userId);
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/users`;
  }

  /**
   * Find all users on workspace
   */
  get(query: UsersQuery): Promise<MemberType[]> {
    return this.fetchGet<MemberType[]>(query);
  }

  /**
   * Add user to workspace
   * You can add users to a workspace via API only if that workspace has a paid subscription.
   * If the workspace has a paid subscription, you can add as many users as you want but you
   * are limited by the number of paid user seats on that workspace.
   */
  post(data: NewUserType): Promise<UserType> {
    return this.fetchPost<UserType>(data, {});
  }
}
