import React from 'react';
import Header from '../components/Header';
import Navigation from "../components/navigation/index";
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

export default Layout;