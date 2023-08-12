export enum queryParamsEnum {
  query = "query",
  page = "page",
  limit = "limit",
  sortBy = "sortBy",
  filterBy = "filterBy",
  order = "order",
  startAfter = "startAfter",
  collection = "collection",
  hasMore = "hasMore",
}

export type IqueryOptions = {
  [queryParamsEnum.query]: string;
  [queryParamsEnum.page]: number;
  [queryParamsEnum.limit]: number;
  [queryParamsEnum.sortBy]: string;
  [queryParamsEnum.filterBy]: string;
  [queryParamsEnum.order]: "asc" | "desc";
  [queryParamsEnum.startAfter]: any;
  [queryParamsEnum.collection]: string;
  [queryParamsEnum.hasMore]: boolean;
};

export const defaultQueryOptions: IqueryOptions = {
  [queryParamsEnum.query]: "",
  [queryParamsEnum.page]: 1,
  [queryParamsEnum.limit]: 10,
  [queryParamsEnum.sortBy]: "createdAt",
  [queryParamsEnum.filterBy]: "",
  [queryParamsEnum.order]: "desc",
  [queryParamsEnum.startAfter]: null,
  [queryParamsEnum.collection]: "",
  [queryParamsEnum.hasMore]: true,
};

export type APIResponse = {
  data: any | any[];
  error: boolean;
  message: string;
};
