import { Query } from "./Query.ts";
import MultiItemsQuery from "./MultiItemsQuery.ts";

export default interface UserGroupQuery extends Query, MultiItemsQuery {
  projectId: string;
  name: string;
}
