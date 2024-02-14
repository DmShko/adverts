
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './pages/NotFound/NotFound';

import { nanoid } from 'nanoid';

// path consts
  const CATALOG = '/catalog';
  const FAVORITE = '/favorites';
  const NOTFOUND = '/*';

export const App = () => {
  // Routes
  const appRoutes = [
    {path: CATALOG, element: <Catalog />,},
    {path: FAVORITE, element: <Favorites />,},
    {path: NOTFOUND, element: <NotFound />,}
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index
            element={<Home/>}
          />

          {appRoutes.map(({ path, element }) => 
          {return <Route key={nanoid()} path={path} element={element}/>})}

        </Route>
      </Routes>
    </>
  );
}