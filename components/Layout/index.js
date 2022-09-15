import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

import { MainWrapper } from './styles';

export default function Layout({ children }) {
  return (
    <MainWrapper>
      <Navigation />
      {children}
      <Footer />
    </MainWrapper>
  );
}
