import ClockifyAPI, {
  IGettable,
  IPostable,
} from "../../../../Api/ClockifyApi/index.ts";
import type { ProjectType } from "../../../../Types/ProjectType.ts";
import type { NewProjectType } from "../../../../Types/NewProjectType.ts";
import Project from "./Project/index.ts";
import ProjectsQuery from "../../../../Queries/ProjectsQuery.ts";

export default class Projects extends ClockifyAPI
  implements IGettable<ProjectType[]>, IPostable<ProjectType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects`;
  }

  withId(projectId: string): Project {
    return new Project(this._apiKey, this.workspaceId, projectId);
  }

  /**
   * Get all projects on workspace
   * Find project by ID
   */
  get(query: ProjectsQuery = {}): Promise<ProjectType[]> {
    return this.fetchGet<ProjectType[]>(query);
  }

  /**
   * Add a new project to workspace
   */
  post(data: NewProjectType): Promise<ProjectType> {
    return this.fetchPost<ProjectType>(data, {});
  }
}
