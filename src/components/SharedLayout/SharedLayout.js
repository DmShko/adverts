import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import sh from './SharedLayout.module.scss';

const SharedLayout = () => {

  return (
    <>
      <section className={sh.section}>
        <header className={sh.header}>
          <nav className={sh.nav}>
            <NavLink className={sh.link} to="/">
              Home
            </NavLink>
          </nav>    
        </header>
        
      </section>

      <section className={sh.section}>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </section>
    </>
  );
};

export default SharedLayout;
