import { Query } from "./Query.ts";

export enum CustomFieldQueryStatusEnum {
  inactive = "INACTIVE",
  visible = "VISIBLE",
  invisible = "INVISIBLE",
}
export default interface CustomFieldsQuery extends Query {
  name: string;
  status: CustomFieldQueryStatusEnum;
}
