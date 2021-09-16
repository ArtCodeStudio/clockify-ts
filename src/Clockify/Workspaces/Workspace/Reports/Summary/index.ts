import { IPostable } from "../../../../../Api/ClockifyApi/index.ts";
import { RequestSummaryReportType } from "../../../../../Types/RequestSummaryReportType.ts";
import { SummaryReportType } from "../../../../../Types/SummaryReportType.ts";
import ReportsApi from "../../../../../Api/ReportsApi/index.ts";

export default class Summary extends ReportsApi
  implements IPostable<SummaryReportType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/summary`;
  }

  post(data: RequestSummaryReportType): Promise<SummaryReportType> {
    return this.axiosPost<SummaryReportType>(data, {});
  }
}
