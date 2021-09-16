import { IPostable } from "../../../../../Api/ClockifyApi/index.ts";
import { DetailedReportType } from "../../../../../Types/DetailedReportType.ts";
import { RequestDetailedReportType } from "../../../../../Types/RequestDetailedReportType.ts";
import ReportsApi from "../../../../../Api/ReportsApi/index.ts";

export default class Detailed extends ReportsApi
  implements IPostable<DetailedReportType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/detailed`;
  }

  post(data: RequestDetailedReportType): Promise<DetailedReportType> {
    return this.axiosPost<DetailedReportType>(data, {});
  }
}
