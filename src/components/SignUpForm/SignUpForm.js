import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { rem } from 'polished';
import media from 'utils/media';

import { FONT_FAMILIES, COLOR, BORDER_RADIUS, FONT_SIZES, SPACE } from 'config';

const BUTTON_WIDTH = 140;

/* todo: clarify necessity of id selector usage */
const Wrapper = styled.div`
  position: relative;
  margin: ${props => (props.home ? rem(SPACE[6]) : 0)} 0 0;
  
  #mc-embedded-subscribe {
    width: 100%;
    margin: ${rem(SPACE[4])} 0 0;
    
    ${media.sm.css`
      position: absolute;
      top: -1px;
      right: 0;
      margin: 0;
      width: ${rem(BUTTON_WIDTH)};
    `}
  }
  
  .response,
  .mce_inline_error {
    margin: 0;  
    color: ${COLOR.white};
    padding-left: ${rem(SPACE[4])};
    font-size: ${rem(FONT_SIZES[2])};
    font-family: ${FONT_FAMILIES.sans};
  }
  
  #mce-success-response, 
  #mce-error-response, 
  div.mce_inline_error {
    margin-top: ${rem(SPACE[2])};
  }
  
  .response a {
    color: ${COLOR.white};
    font-size: ${rem(FONT_SIZES[2])};
    font-family: ${FONT_FAMILIES.sans};  
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${COLOR.white};
  background: transparent;
  cursor: pointer;
  line-height: 20px;
  box-sizing: border-box;
  text-align: left;
  border-radius: ${BORDER_RADIUS.pill};
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  padding: ${rem(SPACE[2])} ${rem(SPACE[4])};
  color: ${COLOR.white};
  
  ${media.sm.css`
    padding: ${rem(SPACE[3])} ${rem(BUTTON_WIDTH)} ${rem(SPACE[3])} ${rem(SPACE[6])};
  `}
  
  &:focus {
    outline: none;
  }
  
  ::-webkit-input-placeholder {
    color: ${COLOR.white};
  }
  ::-moz-placeholder {
    color: ${COLOR.white};
  }
  :-ms-input-placeholder {
    color: ${COLOR.white};
  }
  :-moz-placeholder {
    color: ${COLOR.white};
  }
`;

const OptionRow = styled.div`
  display:none;
`;

const Form = styled.form`
  width: 100%;
`;

const Submit = Button.withComponent('button');

class SignUpForm extends PureComponent {
  
  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const { skyminerOption, onSubmitCallback } = this.props;
    /* eslint-disable max-len */
    return (
      <Wrapper>
        <Form
          action="//skycoin.us16.list-manage.com/subscribe/post?u=47a93630ab9172f29aff78b99&amp;id=264afe24a1"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          ref={(node) => { this.form = node; }}
          target="_blank"
          noValidate
          onSubmit={onSubmitCallback}
        >
          <div className="mc-field-group">
            <FormattedMessage id="newsletter.input">
              {message => <Input placeholder={message} type="email" name="EMAIL" className="required email" id="mce-EMAIL" />}
            </FormattedMessage>
          </div>
          {skyminerOption &&
            <OptionRow className="mc-field-group input-group">
              <input type="checkbox" value="1" name="group[1057][1]" id="mce-group[1057]-1057-0" checked aria-hidden="true" />
              <label htmlFor="mce-group[1057]-1057-0">
                <FormattedMessage id="newsletter.skyminerOption" />
              </label>
            </OptionRow>
          }
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_47a93630ab9172f29aff78b99_264afe24a1" tabIndex="-1" value="" />
          </div>

          <Submit color="base" bg="white" big width={'200px'} pill type="submit" name="subscribe" id="mc-embedded-subscribe">
            <FormattedMessage id="newsletter.button" />
          </Submit>
        </Form>
      </Wrapper>
    );
    /* eslint-enable max-len */
  }
}

SignUpForm.propTypes = {
  skyminerOption: PropTypes.bool,
  onSubmitCallback: PropTypes.func,
};

SignUpForm.defaultProps = {
  skyminerOption: false,
  onSubmitCallback: null
};

export default SignUpForm;
