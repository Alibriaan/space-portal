export default function buildQueryParamsString(query: { [key: string]: any}): string {
  let queryString = '';

  Object.keys(query).forEach((key, index) => {
    queryString = (index === 0) ?  `${key}=${query[key]}` :`${queryString}&${key}=${query[key]}`;
  })

  return queryString;
}