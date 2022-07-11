import { AxiosResponse } from 'axios';
import buildQueryParamsString from '../../../queryParamsBuilder';
import { api, API_KEY } from '../index';

const entryPoints = {
  'apod': 'planetary/apod'
}


export interface APODGetPictureRequestQuery {
  date: Date,
  start_date: Date,
  end_date: Date,
  count: number,
  thumbs: boolean,
}

export interface APODGetPictureRequestResponse {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const getPictureOfTheDay = (query: Partial<APODGetPictureRequestQuery> = {}): Promise<AxiosResponse<APODGetPictureRequestResponse>> => {
  return api.get(`${entryPoints.apod}?${buildQueryParamsString(query)}&api_key=${API_KEY}`);
}