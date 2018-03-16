import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import Header from 'components/Header';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';

import EcosystemSection from './components/EcosystemSection';

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Ecosystem = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'ecosystem.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'ecosystem.description' })}
      />
    </Helmet>

    <Header border />
    <Container>
      <Wrapper>
        <EcosystemSection />
      </Wrapper>
    </Container>
    <Footer />
  </div>
);

Ecosystem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Ecosystem);
