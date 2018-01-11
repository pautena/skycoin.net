import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import MarketsList from './components/MarketsList/MarketsList';

const MarketsPage = () => (
  <div>
    <Header border />
    <Container>
      <MarketsList />
    </Container>
    <Footer />
  </div>
);

export default MarketsPage;
