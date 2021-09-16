import { Query } from "./Query.ts";

export default interface UpdateClientQuery extends Query {
  "archive-projects"?: boolean;
}
