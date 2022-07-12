export default function buildQueryParamsString(query: { [key: string]: unknown}): string {
  let queryString = '';

  Object.keys(query).forEach((key, index) => {
    const isObject = typeof query[key] === 'object';
    const value = isObject ? JSON.stringify(query[key] as string) : query[key];

    queryString = (index === 0) ?  `${key}=${value}` :`${queryString}&${key}=${value}`;
  })

  return queryString;
}