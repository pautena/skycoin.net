import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import Container from 'components/Container';
import Text from 'components/Text';
import SignUpForm from 'components/SignUpForm';
import media from 'utils/media';

import bgSignUp from './bg-signup.png';
import icArrow from './icArrow.png';

const Wrapper = styled(Box)`
  background-image: url(${bgSignUp});
  background-size: cover;
`;

const SignUp = styled(Flex) `
  width: 100%;
  min-height: 82px;
`;

const ArrowContainer = styled(Box)`
  display: none;
  text-align: right;
  
  ${media.md.css`
    display: block;
  `}
`;

const ArrowImg = styled.img`
  margin-right: ${rem(50)};
  margin-top: ${rem(5)};
`;

const SignUpSection = () => (
  <Wrapper py={5}>
    <Container>
      <SignUp align="center" justify="space-between" row wrap>
        <ArrowContainer width={15 / 100}>
          <ArrowImg src={icArrow} />
        </ArrowContainer>
        <Box width={[1, 1, 35 / 100]}>
          <Text mb={[5, 0]} fontSize={rem(20)} style={{ fontWeight: 'bold' }} color="white" textAlign="center">Sign up to receive updates</Text>
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          <SignUpForm />
        </Box>
      </SignUp>
    </Container>
  </Wrapper>
);


export default SignUpSection;
