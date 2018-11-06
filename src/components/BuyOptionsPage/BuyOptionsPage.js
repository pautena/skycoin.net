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
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Button from '../Button/Button';
import background from './back.svg';

const Wrap = styled.div`
  margin-bottom: ${rem(SPACE[9])};
`;

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

class BuyOptionsPage extends PureComponent {
  render() {
    const height = window.innerHeight - 200;
    return (<div>
      <Header border />
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
  }
}

BuyOptionsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(BuyOptionsPage);
