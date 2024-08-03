import React from 'react';
import Header from '../components/Header';
import Navigation from "../components/navigation/index";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <Header />
    {children}
  </>
);

export default Layout;