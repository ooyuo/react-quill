import CatListPage from '@/pages/cat/CatListPage';
import { RouteObject } from 'react-router-dom';

const CatRoutes: RouteObject[] = [
  {
    path: 'cat',
    children: [{ path: 'list', element: <CatListPage /> }],
  },
];

export default CatRoutes;
