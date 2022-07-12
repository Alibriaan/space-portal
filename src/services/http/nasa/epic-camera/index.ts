import axios, { AxiosResponse } from 'axios';
import { API_KEY } from '../index';

const EPIC_API_ENTRY_POINT = 'https://epic.gsfc.nasa.gov';

const epicApi = axios.create({
  // headers: API_HEADERS, 
  baseURL: EPIC_API_ENTRY_POINT,
});

const ENDPOINTS = {
  'images': '/api/natural',
  'imageByDate': '/api/enchanced/date',
  'allDates': '/api/natural/all',
  'natural': '/archive/natural',
}

export interface ImageGetParams {
  year: string;
  month: string;
  day: string;
  imageId: string;
}

export interface NeowsNaturalImagesRequestResponse {
  "identifier": string;
  "caption": string;
  "image": string,
  "version": string,
  "centroid_coordinates": {
    "lat": number,
    "lon": number,
  } ,
  "dscovr_j2000_position": {
    "x": number,
    "y": number,
    "z": number,
  } ,
  "lunar_j2000_position": {
    "x": number,
    "y": number,
    "z": number,
  } ,
  "sun_j2000_position": {
    "x": number,
    "y": number,
    "z": number
  } ,
  "attitude_quaternions": {
    "q0": number,
    "q1": number,
    "q2": number,
    "q3": number,
  } ,
  "date": string,
  "coords": {
    "centroid_coordinates": {
    "lat": number,
    "lon": number
    } ,
    "dscovr_j2000_position": {
    "x": number,
    "y": number,
    "z": number
    } ,
    "lunar_j2000_position": {
    "x": number,
    "y": number,
    "z": number
    } ,
    "sun_j2000_position": {
    "x": number,
    "y": number,
    "z": number
    } ,
    "attitude_quaternions": {
    "q0": number,
    "q1": number,
    "q2": number,
    "q3": number
    }
  }
}

export const getNaturalImages = (): Promise<AxiosResponse<NeowsNaturalImagesRequestResponse[]>> => {
  return epicApi.get(`${ENDPOINTS.images}?api_key=${API_KEY}`);
}


export const getAllDates = (): Promise<AxiosResponse<{ date: string }[]>> => {
  return epicApi.get(`${ENDPOINTS.allDates}?api_key=${API_KEY}`);
}

// export const getImageByDateAndId = (params: ImageGetParams) => {
//   const { year, month, day, imageId } = { ...params };

//   return epicApi.get(`${entryPoints.natural}/${year}/${month}/${day}/png/${imageId}.png`);
// }


export const getImageUrlByDateAndId = (params: ImageGetParams) => {
  const { year, month, day, imageId } = { ...params };

  return `${EPIC_API_ENTRY_POINT}${ENDPOINTS.natural}/${year}/${month}/${day}/png/${imageId}.png`;
}