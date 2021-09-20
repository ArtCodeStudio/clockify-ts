import ClockifyAPI, {
  IDeletable,
  IGettable,
  IPuttable,
} from "../../../../../Api/ClockifyApi/index.ts";
import type { TimeEntryType } from "../../../../../Types/TimeEntryType.ts";
import type { NewTimeEntryType } from "../../../../../Types/NewTimeEntryType.ts";
import TimeEntryQuery from "../../../../../Queries/TimeEntryQuery.ts";

export default class TimeEntry extends ClockifyAPI
  implements
    IGettable<TimeEntryType>,
    IPuttable<TimeEntryType>,
    IDeletable<null> {
  workspaceId: string;
  timeEntryId: string;

  constructor(apiKey: string, workspaceId: string, timeEntryId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.timeEntryId = timeEntryId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries/${this.timeEntryId}`;
  }

  /**
   * Get a specific time entry on workspace
   */
  get(query: TimeEntryQuery = {}): Promise<TimeEntryType> {
    return this.fetchGet<TimeEntryType>(query);
  }

  /**
   * Update time entry on workspace
   */
  put(data: NewTimeEntryType): Promise<TimeEntryType> {
    return this.fetchPut<TimeEntryType>(data, {});
  }

  /**
   * Delete time entry from workspace
   */
  delete(): Promise<null> {
    return this.fetchDelete<null>({});
  }
}
