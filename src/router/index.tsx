import EpicImagesPage from "../pages/EpicImagesPage";
import MainPage from "../pages/MainPage/MainPage";
import NasaTechPortPage from "../pages/NasaTechport/NasaTechport";
import PictureOfTheDayPage from "../pages/PictureOfTheDayPage";

export interface RouteConfiguration {
  name: string,
  testId: string,
  link: string,
  page: JSX.Element
  description: string,
}

export enum RouterPages {
  mainPage,
  pictureOfTheDay,
  epic,
  nasaTechport,
}

const router: RouteConfiguration[] = [
  {
    name: 'Main Page',
    testId: 'main-page',
    link: '/',
    page: <MainPage data-testid='main-page' />,
    description: 'Main page with chapter selection',
  },
  {
    name: 'Picture of the day',
    testId: 'picture-of-the-day',
    link: '/picture-of-the-day',
    page: <PictureOfTheDayPage />,
    description: 'Page with nasa picture',
  },
  {
    name: 'EPIC',
    testId: 'epic-images',
    link: '/epic-images',
    page: <EpicImagesPage />,
    description: 'Earth Polychromatic Imaging Camera page',
  },
  {
    name: 'Nasa Techport',
    testId: 'nasa-tech-porth',
    link: '/nasa-tech-porth',
    page: <NasaTechPortPage />,
    description: 'Page with nasa technology informations',
  },
];

export default router;
