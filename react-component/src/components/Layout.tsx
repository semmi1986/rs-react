import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
