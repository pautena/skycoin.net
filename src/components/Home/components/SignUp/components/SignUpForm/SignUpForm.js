import React, { PureComponent } from 'react';
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
  margin-right: ${rem(SPACE[6])};
  
  #mc-embedded-subscribe {
    position: absolute;
    top: -1px;
    right: 0;
    margin: 0;
    width: ${rem(BUTTON_WIDTH)};
  }
  
  .mce_inline_error {
    margin: 0;  
    color: ${COLOR.white};
  }
  
  div.mce_inline_error {
    margin-top: ${rem(SPACE[2])};
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${COLOR.white};
  background: transparent;
  cursor: pointer;
  line-height: 1;
  box-sizing: border-box;
  text-align: left;
  border-radius: ${BORDER_RADIUS.pill};
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  padding: ${rem(SPACE[2])} ${rem(BUTTON_WIDTH)} ${rem(SPACE[2])} ${rem(SPACE[4])};
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

const Submit = Button.withComponent('button');

class SignUpForm extends PureComponent {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    /* eslint-disable max-len */
    return (
      <Wrapper>
        <form
          action="//skycoin.us16.list-manage.com/subscribe/post?u=47a93630ab9172f29aff78b99&amp;id=264afe24a1"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          ref={(node) => { this.form = node; }}
          target="_blank"
          noValidate
        >
          <div className="mc-field-group">
            <Input placeholder="Enter Your Email" type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_47a93630ab9172f29aff78b99_264afe24a1" tabIndex="-1" value="" />
          </div>

          <Submit color="base" bg="white" big width={'200px'} pill type="submit" name="subscribe" id="mc-embedded-subscribe">
            <FormattedMessage id="home.signup.button" />
          </Submit>
        </form>
      </Wrapper>
    );
    /* eslint-enable max-len */
  }
}

export default SignUpForm;
