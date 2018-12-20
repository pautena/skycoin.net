import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { injectIntl, FormattedMessage } from 'react-intl';
import { COLOR } from 'config';
import Heading from 'components/Heading';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Button from '../Button/Button';
import background from './back.svg';
import Analytics from '../../utils/analytics';

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
  min-height: 100vh;
  padding-top: 20%;
  
  ${media.sm.css`
    padding-top: 10%;
  `}
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const FlexRow = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  ${media.sm.css`
    flex-direction: row;
  `}
`;

const StyledLinkButton = styled(LinkButton)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

function handleCryptoClicked() {
  Analytics.sendEvent(Analytics.EVENT_BUY_SKY, 'Crypto', 'BTC to SKY');
}

const BuyOptionsPage = () => (<div>
  <Header border showBuy={false} />
  <StyledDiv>
    <StyledContainer>
      <Heading heavy as="h2" mb={10} fontSize={[6, 7]} color={COLOR.white}>
        <FormattedMessage id="buyOptions.title" />
      </Heading>
      <FlexRow>
        <StyledLinkButton onClick={() => handleCryptoClicked()} href="https://exchange.skycoin.net/" target="_blank" {...buttonsProps}>
          <FormattedMessage id="buyOptions.bitcoin" />
        </StyledLinkButton>
        <StyledButton to="/buy-fiat" {...buttonsProps} >
          <FormattedMessage id="buyOptions.creditCard" />
        </StyledButton>
      </FlexRow>
    </StyledContainer>
  </StyledDiv>
  <Footer />
</div>);

export default injectIntl(BuyOptionsPage);
