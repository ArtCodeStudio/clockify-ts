import { Query } from "./Query.ts";
import MultiItemsQuery from "./MultiItemsQuery.ts";

export default interface ClientsQuery extends Query, MultiItemsQuery {
  /**
   * If true, you'll get only archived clients. If false, you'll get only active clients.
   */
  archived?: boolean;
  /**
   * If provided, clients will be filtered by name
   */
  name?: string;
}
