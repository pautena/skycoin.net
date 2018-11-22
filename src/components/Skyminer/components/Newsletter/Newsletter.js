import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SignUpForm from 'components/SignUpForm';
import Text from 'components/Text';
import { COLOR } from 'config';
import media from 'utils/media';

import bg from './skyminerSignupBg.svg';
import {Analytics} from "../../../../utils/analytics";

const Wrapper = styled.div`
  background: ${COLOR.base};
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  position: relative;
  
  ${media.sm.css`
    min-height: 390px;  
  `}

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
    background: url(${bg}) 100% 20% no-repeat;
    background-size: contain;
    
    ${media.md.css`
      display: block;
    `}
  }
`;

function handleSubmit() {
  Analytics.sendEvent('Email', 'Sign Up', 'Skyminer Waitlist', false);
}

const Newsletter = ({ setRef }) => (
  <Wrapper innerRef={c => setRef(c)}>
    <Container>
      <StyledBox width={[1, 1, 3 / 5]} py={[10, 13]}>
        <Heading heavy as="h2" mb={[4, 6]} fontSize={[5, 6, 7]} color="white">
          <FormattedMessage id="skyminer.signup.heading" />
        </Heading>
        <Text fontSize={2} my={[4, 6]} color="white">
          <FormattedMessage id="skyminer.signup.body" />
        </Text>
        <Box pr={[0, 0, 8]}>
          <SignUpForm onSubmitCallback={handleSubmit} home skyminerOption />
        </Box>
      </StyledBox>
    </Container>
  </Wrapper>
);

Newsletter.propTypes = {
  setRef: PropTypes.func.isRequired,
};

export default Newsletter;
