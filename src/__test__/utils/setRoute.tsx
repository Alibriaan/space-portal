const setRoute = (route: string) => window.history.pushState({}, '', route);

export default setRoute;