import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SignUpForm from 'components/SignUpForm';
import Text from 'components/Text';
import { COLOR } from 'config';
import media from 'utils/media';

import bg from './signUpBg.svg';
import { Analytics } from '../../../../utils/analytics';

const Wrapper = styled.div`
  background: ${COLOR.base};
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  position: relative;

  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 410px;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background: url(${bg}) 100% 50% no-repeat;
    background-size: contain;
    
    ${media.md.css`
      display: block;
    `}
  }
`;

function handleSubmit() {
  Analytics.sendEvent('Email', 'Sign Up', 'Newsletter', false);
}

const SignUp = () => (
  <Wrapper>
    <Container>
      <StyledBox width={[1, 1, 3 / 5]} py={[10, 13]}>
        <Heading heavy as="h2" mb={[4, 6]} fontSize={[5, 6, 7]} color="white">
          <FormattedMessage id="home.signup.heading" />
        </Heading>
        <Text fontSize={2} my={[4, 6]} color="white">
          <FormattedMessage id="home.signup.body" />
        </Text>
        <Box pr={[0, 0, 8]}>
          <SignUpForm onSubmitCallback={handleSubmit} home />
        </Box>
      </StyledBox>
    </Container>
  </Wrapper>
);

export default SignUp;
