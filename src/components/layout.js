import * as React from 'react';
import { Link } from 'gatsby';
import '../scss/style.scss';

const Layout = ({ pageTitle, children }) => {
  return(
    <>
      <title>{ pageTitle }</title>
      <header class="page-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout;
