import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import Text from 'components/Text';
import SignUpForm from 'components/SignUpForm';
import media from 'utils/media';

import { COLOR } from 'config';

import icSignUp from './signUpBg.svg';

const Wrapper = styled(Box)`  
  background: ${COLOR.base};
  overflow: hidden;
`;

const SignUp = styled(Flex) `
  width: 100%;
  min-height: 82px;
`;

const StyledBox = styled(Flex)`
  position: relative;
  
  &::before {    
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 150px;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    background: url(${icSignUp}) 100% 50% no-repeat;
    background-size: contain;
    
    ${media.md.css`
      display: block;
    `}
  }
`;

const SignUpSectionSecondary = () => (
  <Wrapper py={5}>
    <Container>
      <SignUp justify="flex-end">
        <StyledBox width={[1, 1, 85 / 100]} align="center" justify="space-between" row wrap>
          <Box width={[1, 1, 41 / 100]}>
            <Text mb={[5, 0]} fontSize={rem(20)} style={{ fontWeight: 'bold' }} color="white" textAlign="center">
              <FormattedMessage id="newsletter.heading" />
            </Text>
          </Box>
          <Box width={[1, 1, 59 / 100]}>
            <SignUpForm />
          </Box>
        </StyledBox>
      </SignUp>
    </Container>
  </Wrapper>
);


export default SignUpSectionSecondary;
