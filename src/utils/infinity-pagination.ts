import { IPaginationOptions } from './types/pagination-options';

export const infinityPagination = <T>(
  data: [T[], number],
  options: IPaginationOptions,
) => {
  return {
    data: data[0],
    total: data[1],
    page: options.page,
    limit: options.limit,
    hasNextPage: data[1] > options.page * options.limit,
  };
};
