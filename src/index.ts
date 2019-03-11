import { AxiosResponse, default as axios } from 'axios';

import {
  IAPIResourceList,
  IBerry,
  IBerryFirmness,
  IBerryFlavor,
  IContestEffect,
  IContestType,
  IEncounterCondition,
  IEncounterConditionValue,
  IEncounterMethod,
  INamedAPIResourceList,
  IPokeAPIResource,
  ISuperContestEffect,
  TPokeAPIEndpoint,
} from './interfaces';

export class PokeAPI {
  protected static _API_VERSION: string = 'v2';
  protected static _BASE: string = 'https://pokeapi.co';

  public async get<T extends IBerry>(endpoint: 'berry', filter: number | string): Promise<T>;
  public async get<T extends IBerryFirmness>(endpoint: 'berry-firmness', filter: number | string): Promise<T>;
  public async get<T extends IBerryFlavor>(endpoint: 'berry-flavor', filter: number | string): Promise<T>;
  public async get<T extends IContestType>(endpoint: 'contest-type', filter: number | string): Promise<T>;
  public async get<T extends IContestEffect>(endpoint: 'contest-effect', filter: number): Promise<T>;
  public async get<T extends ISuperContestEffect>(endpoint: 'super-contest-effect', filter: number): Promise<T>;
  public async get<T extends IEncounterMethod>(endpoint: 'encounter-method', filter: number | string): Promise<T>;
  public async get<T extends IEncounterCondition>(endpoint: 'encounter-condition', filter: number | string): Promise<T>;
  public async get<T extends IEncounterConditionValue>(endpoint: 'encounter-condition-value', filter: number | string): Promise<T>;
  public async get<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, filter: number | string): Promise<T> {
    const url: string = this._constructUrl(endpoint, filter);

    return axios
      .get<T>(url)
      .then((value: AxiosResponse<T>) => {
        return value.data;
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }

  public async getList(
    endpoint: 'berry' | 'berry-firmness' | 'berry-flavor' | 'contest-type' | 'encounter-method' | 'encounter-condition' | 'encounter-condition-value',
    limit?: number,
    offset?: number,
  ): Promise<INamedAPIResourceList>;
  public async getList(endpoint: 'contest-effect' | 'super-contest-effect', limit?: number, offset?: number): Promise<IAPIResourceList>;
  public async getList(endpoint: TPokeAPIEndpoint, limit?: number, offset?: number): Promise<IAPIResourceList | INamedAPIResourceList> {
    const url: string = this._constructListUrl(endpoint, limit, offset);

    return axios
      .get<IAPIResourceList | INamedAPIResourceList>(url)
      .then((value: AxiosResponse<IAPIResourceList | INamedAPIResourceList>) => {
        if (this._isListNamed(value.data)) {
          return value.data as INamedAPIResourceList;
        } else {
          return value.data as IAPIResourceList;
        }
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }

  protected _constructListUrl(endpoint: string, limit?: number, offset?: number): string {
    let route: string = `/api/${PokeAPI._API_VERSION}/${endpoint}/`;

    if (this._isNumber(limit)) {
      route += `?limit=${limit}`;

      if (this._isNumber(offset)) {
        route += `&offset=${offset}`;
      }
    }

    const url: URL = new URL(route, PokeAPI._BASE);

    return url.href;
  }

  protected _constructUrl(endpoint: string, filter: number | string): string {
    const url: URL = new URL(`/api/${PokeAPI._API_VERSION}/${endpoint}/${filter}/`, PokeAPI._BASE);

    return url.href;
  }

  protected _isListNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
    if (list.results.length > 0) {
      return (list as INamedAPIResourceList).results[0].name !== undefined;
    } else {
      return false;
    }
  }

  protected _isNumber(value: any): value is number {
    return typeof value === 'number';
  }
}
