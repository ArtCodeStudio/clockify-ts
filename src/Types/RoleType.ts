import type { EntityType } from "./EntityType.ts";

export enum RoleEnum {
  projectManager = "PROJECT_MANAGER",
  teamManager = "TEAM_MANAGER",
  user = "USER",
  administrator = "ADMINISTRATOR",
}
type RoleType = {
  "role": RoleEnum;
  "entities": Array<EntityType>;
};
export type { RoleType };
