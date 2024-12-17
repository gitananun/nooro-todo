interface IPagination {
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface IPaginatedResponse<T> {
  items: T[];
  pagination: IPagination;
}
