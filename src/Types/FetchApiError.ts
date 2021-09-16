export interface FetchApiError extends Error {
  response: Response;
  request: Request;
  data: any;
}
