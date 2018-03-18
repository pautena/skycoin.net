import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import Text from 'components/Text';
import SignUpForm from 'components/SignUpForm';
import media from 'utils/media';

import bgSignUp from './bg-signup.png';
import icArrow from './icArrow.png';

const ArrowContainer = styled(Box)`
  display: none;
  
  ${media.md.css`
    display: block;
  `}
`;

const ArrowImg = styled.img`
  margin-right: ${rem(50)};
  margin-top: ${rem(5)};
`;

const SignUp = styled(Flex) `
  min-height: 122px;
  background-image: url(${bgSignUp});
  background-size: cover;
  text-align: center;
  vertical-align: center;
`;

const SignUpSection = () => (
  <SignUp align="center" justify="center" wrap px={[rem(10), 0]} py={[4, 5]}>
    <ArrowContainer mt={rem(1)} ml={rem(90)}>
      <ArrowImg src={icArrow} />
    </ArrowContainer>
    <Box mx={[0, rem(47)]}>
      <Text mb={[4, 0]} fontSize={rem(20)} style={{ fontWeight: 'bold' }} color="white">Sign up to receive updates</Text>
    </Box>
    <Box>
      <Flex px={[rem(10), 0]}>
        <SignUpForm />
      </Flex>
    </Box>
  </SignUp>
);


export default SignUpSection;
