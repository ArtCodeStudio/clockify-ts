import ClockifyAPI, { IGettable } from "../../../../Api/ClockifyApi/index.ts";
import CustomFieldsQuery from "../../../../Queries/CustomFieldsQuery.ts";
import type { CustomFieldType } from "../../../../Types/CustomFieldType.ts";

export default class CustomFields extends ClockifyAPI
  implements IGettable<CustomFieldType[]> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/custom-fields`;
  }

  /**
   * Get custom fields on workspace
   */
  get(query: CustomFieldsQuery): Promise<CustomFieldType[]> {
    return this.axiosGet<CustomFieldType[]>(query);
  }
}
