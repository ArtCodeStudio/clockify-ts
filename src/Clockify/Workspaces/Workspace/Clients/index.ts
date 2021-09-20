import ClockifyAPI, {
  IGettable,
  IPostable,
} from "../../../../Api/ClockifyApi/index.ts";
import Client from "./Client/index.ts";
import ClientsQuery from "../../../../Queries/ClientsQuery.ts";
import type { ClientType } from "../../../../Types/ClientType.ts";

export default class Clients extends ClockifyAPI
  implements IGettable<ClientType[]>, IPostable<ClientType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/clients`;
  }

  withId(clientId: string): Client {
    return new Client(this._apiKey, this.workspaceId, clientId);
  }

  /**
   * Find clients on workspace
   */
  get(query: ClientsQuery = {}): Promise<ClientType[]> {
    return this.fetchGet<ClientType[]>(query);
  }

  /**
   * Add a new client to workspace
   */
  post(data: { name: string }): Promise<ClientType> {
    return this.fetchPost<ClientType>(data, {});
  }
}
