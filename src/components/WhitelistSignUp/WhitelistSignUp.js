import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import media from 'utils/media';
import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';
import { COLOR } from 'config';

const Wrapper = styled(Box)`
  background-color: ${COLOR.base};
  background-size: cover;
`;
const SignUp = styled(Flex) `
  width: 100%;
  min-height: 82px;
`;

const Title = styled(Text)`
  margin: 20px 0;
  font-size: ${rem(20)};
  color: white;
  text-align: center;

  ${media.sm.css`
    margin: 20px;
  `}
`;

const SignUpSection = () => (
  <Wrapper py={5}>
    <Container>
      <SignUp align="center" justify="center" row wrap>
        <Title mb={[5, 0]}>
          <FormattedMessage id="whitelist.signUp.title" />
        </Title>
        <Button to="/whitelist" color="base" bg="white" big width={'200px'} pill>
          <FormattedMessage id="newsletter.button" />
        </Button>
      </SignUp>
    </Container>
  </Wrapper>
);

export default SignUpSection;
