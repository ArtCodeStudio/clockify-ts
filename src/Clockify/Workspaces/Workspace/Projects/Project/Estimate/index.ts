import ClockifyAPI, {
  IPatchable,
} from "../../../../../../Api/ClockifyApi/index.ts";
import type { EstimateType } from "../../../../../../Types/EstimateType.ts";
import type { ProjectType } from "../../../../../../Types/ProjectType.ts";

export default class Estimate extends ClockifyAPI
  implements IPatchable<ProjectType> {
  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/estimate`;
  }

  /**
   * Update project estimate
   */
  patch(data: EstimateType): Promise<ProjectType> {
    return this.fetchPatch<ProjectType>(data, {});
  }
}
