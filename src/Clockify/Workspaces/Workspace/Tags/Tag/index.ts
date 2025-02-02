import ClockifyAPI, {
  IDeletable,
  IPuttable,
} from "../../../../../Api/ClockifyApi/index.ts";
import type { TagType } from "../../../../../Types/TagType.ts";

export default class Tag extends ClockifyAPI
  implements IPuttable<TagType>, IDeletable<TagType> {
  workspaceId: string;
  tagId: string;

  constructor(apiKey: string, workspaceId: string, tagId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.tagId = tagId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/tags/${this.tagId}`;
  }

  /**
   * Update tag
   */
  put(data: { name: string; archived?: boolean }): Promise<TagType> {
    return this.fetchPut<TagType>(data, {});
  }

  /**
   * Delete tag
   */
  delete(): Promise<TagType> {
    return this.fetchDelete<TagType>({});
  }
}
