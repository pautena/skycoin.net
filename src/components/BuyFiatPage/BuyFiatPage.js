import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { injectIntl, FormattedMessage } from 'react-intl';
import { SPACE, COLOR } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Button from '../Button/Button';

const Wrap = styled.div`
  margin-bottom: ${rem(SPACE[9])};
`;

const Label = styled.label`
`;

const Input = styled.input`
  margin-bottom: ${rem(SPACE[4])};
`;

class BuyFiatPage extends PureComponent {
  static getIndacoinUrl(email, amount, currency, wallet) {
    return `https://indacoin.com/gw/payment_form?partner=skycoin&cur_from=${currency}&cur_to=SKY&amount=${amount}&address=${wallet}&user_id=${email}`;
  }

  static navigateToIndacoin(email, amount, currency, wallet) {
    window.location = BuyFiatPage.getIndacoinUrl(email, amount, currency, wallet);
  }

  componentDidMount() {}

  onFormSuccess() {
    const email = 'info@abitari.com';
    const amount = 50;
    const currency = 'USD';
    const wallet = '10da8c33c00d2b2384ea6e302cdb27b9a959f82ed0a5eb364971b36ffe9195d408d1e99d54131a37698e0b146d39bbd0ce75ba4adecaf8f718baec0d63544e439ee07a2dcb66ae8f92cd56b012ae7ff62b1e46824d6ad9e0f931458acf53daee31ebe471ccec58f56760e460d3de23143286e61d902bc7125f59514a49f9b4613458dfbc9dc07a89d358611ab7ac544e49876375ff965b9a1ed75f065df9a73998c72076eb34492b0d83033a10cd327b7646f118dfd1072931746602aa920febe922be43a92bcedffce7747128c5571e48e932bf16523e266d171b4cd1c86053c4d65d6ef22d05321679d94b824b523b03d99a2d92aa0cdad76721a9542c5e43';

    BuyFiatPage.navigateToIndacoin(email, amount, currency, wallet);
  }

  render() {
    return (<div>
      <Header border />
      <Container>
        <Wrap>
          <Heading heavy as="h2" mb={5} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
            <FormattedMessage id="markets.title" />
          </Heading>
          <Text fontSize={2} color={COLOR.textDark} mb={8}>
            <FormattedMessage id="markets.disclaimer" />
          </Text>
          <Container>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <Label htmlFor={'inputEmail'}>Email</Label>
              <Input id={'inputEmail'} type={'email'} placeholder={'email'} />

              <Label htmlFor={'inputAmount'}>Amount</Label>
              <Input id={'inputAmount'} type={'number'} placeholder={'50'} min={50} />

              <Label htmlFor={'inputCurrency'}>Currency</Label>
              <Input placeholder={'USD'} />

              <Label htmlFor={'inputWallet'}>Address</Label>
              <Input placeholder={'Wallet address'} />

              <Button onClick={() => this.onFormSuccess()}>Buy SKY</Button>
            </form>
          </Container>
        </Wrap>
      </Container>
      <Footer />
    </div>);
  }
}

export default injectIntl(BuyFiatPage);
