import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { COLOR, skyminerFormSrc } from 'config';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';

const FormWrapper = styled.div`
  overflow: hidden;
`;
const Iframe = styled.iframe`
  position: relative;
  top: -3px;
  min-height: 1990px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: -94px;
  border: 0;
`;

export default () => (
  <div>
    <Header border />
    <Container>
      <FormWrapper>
        <Heading heavy as="h2" fontSize={[6, 7]} color={COLOR.textDark} mt={[8, 10]} mb={[5, 7]}>
          <FormattedMessage id="skyminerForm.title" />
        </Heading>
        <Iframe src={skyminerFormSrc} />
      </FormWrapper>
    </Container>
    <Footer />
  </div>
);
