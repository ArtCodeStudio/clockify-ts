import ClockifyAPI, {
  IPatchable,
} from "../../../../../../Api/ClockifyApi/index.ts";
import type { ProjectType } from "../../../../../../Types/ProjectType.ts";
import type { MembershipType } from "../../../../../../Types/MembershipType.ts";

export default class Memberships extends ClockifyAPI
  implements IPatchable<ProjectType> {
  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/memberships`;
  }

  /**
   * Update project memberships
   */
  patch(data: { memberships: Array<MembershipType> }): Promise<ProjectType> {
    return this.fetchPatch<ProjectType>(data, {});
  }
}
