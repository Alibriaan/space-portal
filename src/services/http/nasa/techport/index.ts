import { AxiosResponse } from 'axios';
import { TechPortProjectsResponse, TechPortProjectResponse, TechPortProjectsQuery, TechPortProjectListElement } from '../../../../interfaces/techport-response.interfaces';
import { api, API_KEY } from '../index';

const entryPoints = {
  'projects': '/techport/api/projects'
}



export const getProjects = async (query: TechPortProjectsQuery): Promise<TechPortProjectListElement[]> => {
  const result = await api.get<TechPortProjectsResponse>(`${entryPoints.projects}?api_key=${API_KEY}`);
  let countOfElements = 0;

  return result.data.projects.filter((item, index) => {
    if(index >= query.offset && countOfElements <= query.limit) {
      ++countOfElements;

      return true;
    } else {
      return false;
    }
  });
}

export const getProject = (projectId: string): Promise<AxiosResponse<TechPortProjectResponse>> => {
  return api.get(`${entryPoints.projects}/${projectId}?api_key=${API_KEY}`);
}