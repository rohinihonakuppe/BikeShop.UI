export interface ApiResponse<T> {
  IsSuccess: boolean;
  Data: T;
  Message: string;
}