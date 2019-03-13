import { IAPIResource } from '../../types';

/**
 * Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API.  By default, a list "page" will
 * contain up to 20 resources.  If you would like to change this just add a 'limit' query parameter, e.g. ```?limit=60```.  You can use 'offset' to move to
 * the next page, e.g. ```?limit=60&offset=60```.
 */
export interface IAPIResourceList {
  /**
   * The total number of resources available from this API.
   */
  count: number;
  /**
   * The URL for the next page in the list.
   */
  next: string | null;
  /**
   * The URL for the previous page in the list.
   */
  previous: string | null;
  /**
   * A list of un-named API resources.
   */
  results: IAPIResource[];
}