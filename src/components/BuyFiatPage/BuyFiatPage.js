import React, { PureComponent } from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { injectIntl, FormattedMessage } from 'react-intl';
import { SPACE, COLOR } from 'config';
import Heading from 'components/Heading';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Button from 'components/Button';
import { Box } from 'grid-styled';
import { Flex } from 'glamor/jsxstyle';
import background from './back.svg';
import { FONT_FAMILIES } from '../../config';

const Wrap = styled.div`
  margin-bottom: ${rem(SPACE[9])};
`;

const CommonInputStyle = css`
  margin-bottom: ${rem(SPACE[4])};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  border: 0;
  height: 45px;
  display: flex;
  padding: 0 13px 5px 13px;
  align-items: center;
  font-weight: bold;
  font-family: ${FONT_FAMILIES.sansBold};
`;

const Input = styled.input`
  ${CommonInputStyle}
`;

const StyledDiv = styled.div`
  background: url('${background}') ${COLOR.base};
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 560px;
  background: #F2F2F2;
  padding: 30px 40px 30px 40px;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

const Submit = Button.withComponent('button');

const buttonsProps = {
  color: 'white',
  bg: 'base',
  pill: false,
  my: 6,
  style: { width: 200 },
};

const LabelC = ({ label, htmlFor }) => (<Heading htmlFor={htmlFor} as="label" mb={1} fontSize={[1]} color={COLOR.textDark}>
  <FormattedMessage id={label} />
</Heading>);

LabelC.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Select = ({ className, id, onChange = null, required = false, options = [] }) => (
  <select name={id} onChange={onChange} className={className} id={id} required={required}>
    {options.map(option => <option value={option}>{option}</option>)}
  </select>
);

Select.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  required: false,
  options: [],
  onChange: null,
};

const StyledSelect = styled(Select)`
  ${CommonInputStyle}
  text-transform: uppercase;
`;

const InputGroup = ({ label, inputId, type, onChange = null, placeholder = '', required = false, labelProps = {}, inputProps = {} }) => (<FlexCol>
  <LabelC label={label} htmlFor={inputId} {...labelProps} />
  {type !== 'select' && <Input name={inputId} onChange={onChange} id={inputId} type={type} placeholder={placeholder} required={required} {...inputProps} />}
  {type === 'select' && <StyledSelect name={inputId} onChange={onChange} id={inputId} required={required} options={inputProps.options} /> }
</FlexCol>);

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  labelProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

InputGroup.defaultProps = {
  placeholder: '',
  required: false,
  labelProps: {},
  inputProps: {},
  onChange: null,
};

const currencies = ['usd', 'eur'];

class BuyFiatPage extends PureComponent {
  static getIndacoinUrl(email, amount, currency, wallet) {
    return `https://indacoin.com/gw/payment_form?partner=skycoin&cur_from=${currency}&cur_to=SKY&amount=${amount}&address=${wallet}&user_id=${email}`;
  }

  static navigateToIndacoin(email, amount, currency, wallet) {
    window.location = BuyFiatPage.getIndacoinUrl(email, amount, currency, wallet);
  }

  constructor(props) {
    super(props);
    this.state = {
      currency: currencies[0],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  onFormSuccess(email, amount, currency, wallet) {
    /*
    const email = 'info@abitari.com';
    const amount = 50;
    const currency = 'USD';
    const wallet = '10da8c33c00d2b2384ea6e302cdb27b9a959f82ed0a5eb364971b36ffe9195d40
    8d1e99d54131a37698e0b146d39bbd0ce75ba4adecaf8f718baec0d63544e439ee07a2dcb66ae8f92
    cd56b012ae7ff62b1e46824d6ad9e0f931458acf53daee31ebe471ccec58f56760e460d3de2314328
    6e61d902bc7125f59514a49f9b4613458dfbc9dc07a89d358611ab7ac544e49876375ff965b9a1ed7
    5f065df9a73998c72076eb34492b0d83033a10cd327b7646f118dfd1072931746602aa920febe922b
    e43a92bcedffce7747128c5571e48e932bf16523e266d171b4cd1c86053c4d65d6ef22d05321679d9
    4b824b523b03d99a2d92aa0cdad76721a9542c5e43';
    */

    BuyFiatPage.navigateToIndacoin(email, amount, currency, wallet);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, amount, currency, wallet } = this.state;
    this.onFormSuccess(email, amount, currency, wallet);
  }

  render() {
    const height = window.innerHeight - 200;
    return (<div>
      <Header border showBuy={false} />
      <StyledDiv style={{ height }}>
        <Container>
          <Wrap>
            <StyledContainer>
              <Heading style={{ textAlign: 'center' }} heavy as="h2" mb={5} mt={7} fontSize={[6, 7]} color={COLOR.white}>
                <FormattedMessage id="buyFiat.title" />
              </Heading>
              <Form onSubmit={this.handleSubmit}>
                <InputGroup
                  label={'buyFiat.labelEmail'}
                  inputId={'email'}
                  type={'email'}
                  required
                  onChange={this.handleInputChange}
                />
                <Box width={3 / 4} pr={4}>
                  <InputGroup
                    label={'buyFiat.labelAmount'}
                    inputId={'amount'}
                    type={'number'}
                    required
                    inputProps={{ min: 50 }}
                    onChange={this.handleInputChange}
                  />
                </Box>
                <Box width={1 / 4}>
                  <InputGroup
                    label={'buyFiat.labelCurrency'}
                    inputId={'currency'}
                    type={'select'}
                    inputProps={{ options: currencies }}
                    onChange={this.handleInputChange}
                    required
                  />
                </Box>
                <Box width={1}>
                  <InputGroup
                    label={'buyFiat.labelAddress'}
                    inputId={'wallet'}
                    type={'text'}
                    onChange={this.handleInputChange}
                    required
                  />
                </Box>
                <Heading as="label" mb={1} fontSize={[1]} color={COLOR.textDark}>
                  <FormattedMessage id={'buyFiat.note'} />
                </Heading>
                <Flex justifyContent={'center'} flex={1}>
                  <Submit {...buttonsProps}>
                    <FormattedMessage id={'buyFiat.formBtn'} />
                  </Submit>
                </Flex>
                <Box width={1}>
                  <Heading as="p" mb={1} fontSize={[1]} color={COLOR.textDark} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    <FormattedMessage id={'buyFiat.footNote'} />
                  </Heading>
                </Box>
              </Form>
            </StyledContainer>
          </Wrap>
        </Container>
      </StyledDiv>
      <Footer />
    </div>);
  }
}

export default injectIntl(BuyFiatPage);
