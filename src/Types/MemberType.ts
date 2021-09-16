import type { UserType } from "./UserType.ts";
import type { RoleType } from "./RoleType.ts";

type MemberType = UserType & {
  "roles": Array<RoleType>;
};
export type { MemberType };
