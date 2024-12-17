import { IFiltering, IPagination } from '@interfaces/index';
import { AxiosResponse } from 'axios';
import { IResponseData } from '..';

// After getting the response from the server, we do basic validation to check if the response is valid
// If the response is valid, we return the data from the response
export const validateServiceResponseData = <T>(response: AxiosResponse<IResponseData<T>>): T => {
  if (!response) throw new Error('No response from server');

  const data = response.data.data;
  if (!data) throw new Error('No data from server');

  return data;
};

export const constructRequestURL = (
  url: string,
  pagination?: IPagination,
  filtering?: IFiltering,
  lookup: string[] = [],
): string => {
  if (!pagination && !filtering && !lookup.length) return url;

  let requestURL = url;

  const page = pagination?.page;
  const pageSize = pagination?.pageSize;
  const search = filtering?.search;

  const params = new URLSearchParams();

  if (page && pageSize) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);

  if (lookup.length) params.append('lookup', lookup.join(','));

  requestURL = `${url}?${params.toString()}`;

  return requestURL;
};
