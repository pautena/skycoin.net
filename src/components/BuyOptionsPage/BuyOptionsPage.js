import React from 'react';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import { COLOR } from 'config';
import Heading from 'components/Heading';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Button from '../Button/Button';
import background from './back.svg';

const LinkButton = Button.withComponent('a');

const buttonsProps = {
  color: 'base',
  bg: 'white',
  pill: true,
  mx: 5,
  style: {
    minWidth: 168,
  },
};

const StyledDiv = styled.div`
  background: url('${background}') ${COLOR.base};
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 288px;
`;

const FlexRow = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BuyOptionsPage = () => {
  const height = window.innerHeight;
  return (<div>
    <Header border showBuy={false} />
    <StyledDiv style={{ height }}>
      <StyledContainer>
        <Heading heavy as="h2" mb={10} fontSize={[6, 7]} color={COLOR.white}>
          <FormattedMessage id="buyOptions.title" />
        </Heading>
        <FlexRow>
          <LinkButton href="https://exchange.skycoin.net/" target="_blank" {...buttonsProps}>
            <FormattedMessage id="buyOptions.bitcoin" />
          </LinkButton>
          <Button to="/buy-fiat" {...buttonsProps} >
            <FormattedMessage id="buyOptions.creditCard" />
          </Button>
        </FlexRow>
      </StyledContainer>
    </StyledDiv>
    <Footer />
  </div>);
};

export default injectIntl(BuyOptionsPage);
