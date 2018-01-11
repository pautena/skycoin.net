import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
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

const ArchitectureOverview = () => (
  <Page>
    <Wrapper>
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

export default ArchitectureOverview;
