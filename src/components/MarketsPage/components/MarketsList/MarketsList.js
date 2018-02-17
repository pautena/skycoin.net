import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { SPACE, COLORS, FONT_FAMILIES, FONT_SIZES } from 'config';
import Heading from 'components/Heading';
import Link from 'components/Link';

import LogoCryptopia from './images/Cryptopia-Light2x.png';
import Logoc2cx from './images/c2cx-logo.png';
import Logo5iquant from './images/5iquant-logo.png';

const Wrap = styled.div`
  margin: ${rem(SPACE[5])} 0;
`;

const List = styled.div`
  margin-bottom: ${rem(SPACE[5])};
  border-top: 1px solid ${COLORS.gray[4]};
`;

const Row = styled.div`
  border-bottom: 1px solid ${COLORS.gray[4]};
  padding: ${rem(SPACE[2])} 0;
  text-align: left;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rem(SPACE[8])} 0;
`;

const Logo = styled.img`
  height: 40px;
`;

const Item = styled(Link)`
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLORS.blue[5]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotLinked = styled.span`
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLORS.gray[4]};
`;

const ExhangeRate = styled.span`
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: ${rem(FONT_SIZES[3])};
`;

const Note = styled.span`
  font-size: 0.8em;
`;

const Contact = styled.div`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[3])};
  color: #16191D;
`;

const ContactLink = styled.a`
  color: #16191D;
  text-decoration: none;
`;

const MarketsList = () => (
  <Wrap>
    <Contact>
      <FormattedMessage
        id="markets.contact"
      /> <ContactLink href="mailto:contact@skycoin.net">contact@skycoin.net</ContactLink>
    </Contact>
    <Title>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black">
        <FormattedMessage id="markets.data" />
      </Heading>
    </Title>
    <List>
      <Row>
        <Item target="_blank" href="https://coinmarketcap.com/currencies/skycoin/">CoinMarketCap.com</Item>
      </Row>
    </List>
    <Title>
      <Heading mb={0} heavy as="h2" fontSize={[5, 6]} color="black">
        C2CX
      </Heading>
      <Logo src={Logoc2cx} alt="C2CX LOGO" />
    </Title>
    <List>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_usdt_sky" target="_blank">SKY/USDT</Item>
      </Row>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_btc_sky" target="_blank">SKY/BTC</Item>
      </Row>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_sky" target="_blank">SKY/DRG</Item> <ExhangeRate>(100 CNY = 1 DRG)</ExhangeRate>
      </Row>
    </List>
    <Title>
      <Heading mb={0} heavy as="h2" fontSize={[5, 6]} color="black">
        Cryptopia <Note>(Cryptopia is not allowing deposits or withdraws due to heavy volume)</Note>
      </Heading>
      <Logo src={LogoCryptopia} alt="Cryptopia" />
    </Title>
    <List>
      <Row>
        <NotLinked>SKY/BTC</NotLinked>
      </Row>
    </List>
    <Title>
      <Heading mb={0} heavy as="h2" fontSize={[5, 6]} color="black">
        5iquant
      </Heading>
      <Logo src={Logo5iquant} alt="5iquant logo" />
    </Title>
    <List>
      <Row>
        <Item href="https://www.5iquant.org/iqtexTrade/tradePair/SKY_BTC" target="_blank">SKY/BTC</Item>
      </Row>
      <Row>
        <Item href="https://www.5iquant.org/iqtexTrade/tradePair/SKY_IQT" target="_blank">SKY/IQT</Item>
      </Row>
    </List>
    <Heading heavy as="h2" fontSize={[5, 6]} color="black" my={[4, 6]}>
      Skycoin OTC
    </Heading>
    <List>
      <Row>
        <Item href="https://otc.skycoin.net" target="_blank">Buy Skycoin directly with BTC</Item>
      </Row>
    </List>
  </Wrap>
);

export default MarketsList;
