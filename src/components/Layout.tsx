import React from 'react';
import Header from './Header/Header';
import { Footer } from './Footer/Footer';
import { Banner } from './Banner/Banner';

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Banner />
      <Header />
      <main className="flex-1">{children}</main>
      <div id="portal"></div>
      <Footer />
    </div>
  );
};

export default Layout;
