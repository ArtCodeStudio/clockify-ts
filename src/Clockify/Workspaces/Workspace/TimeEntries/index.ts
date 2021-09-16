import ClockifyAPI, { IPostable } from "../../../../Api/ClockifyApi/index.ts";
import TimeEntry from "./TimeEntry/index.ts";
import type { NewTimeEntryType } from "../../../../Types/NewTimeEntryType.ts";
import type { TimeEntryType } from "../../../../Types/TimeEntryType.ts";

export default class TimeEntries extends ClockifyAPI
  implements IPostable<TimeEntryType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries`;
  }

  withId(timeEntryId: string): TimeEntry {
    return new TimeEntry(this._apiKey, this.workspaceId, timeEntryId);
  }

  /**
   * If end is not sent in request means that stopwatch mode is active, otherwise time entry is manually added.
   * "start" is the only mandatory field in this request.
   */
  post(data: NewTimeEntryType): Promise<TimeEntryType> {
    return this.axiosPost<TimeEntryType>(data, {});
  }
}
