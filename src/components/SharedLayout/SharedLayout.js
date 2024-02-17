import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import sh from './SharedLayout.module.scss';

const SharedLayout = () => {

  return (
    <>
      <Header />
      
        <main>
          <div className={sh.container}>
            <Suspense fallback={<></>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
    </>
  );
};

export default SharedLayout;
