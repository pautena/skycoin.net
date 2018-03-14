import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import { Box } from 'grid-styled';

import Header from 'components/Header';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Table from './components/Table';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex-grow: 1;
  flex: 1;
`;

const ArchitectureOverview = ({ intl }) => (

  <Page>
    <Wrapper>
      <Helmet>
        <title>{intl.formatMessage({ id: 'architectureOverview.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'architectureOverview.description' })}
        />
      </Helmet>
      <Header border />
      <Container>
        <Box my={[5, 7]}>
          <Heading
            heavy
            as="h2"
            fontSize={[5, 6]}
            color="black"
            mb={[4, 6]}
            id="architectureOverview"
          >
            <FormattedMessage id="architectureOverview.heading" />
          </Heading>
        </Box>
      </Container>
      <Container>
        <Table />
      </Container>
    </Wrapper>
    <Footer />
  </Page>

);

ArchitectureOverview.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(ArchitectureOverview);
