import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';

import { FONT_FAMILIES } from 'config';

const Wrapper = styled.div`
  background: #eceef0;
  padding: 3.5em 0;
`;

const Input = styled.input`
  margin: 0 0 0 0.5em;
`;

const Label = styled.label`
  font-family: ${FONT_FAMILIES.sans};
`;

const StyledSubmit = styled.input`
  border: 1px solid #0073ff;
  background-color: #0073ff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  font-family: ${FONT_FAMILIES.sansBold};
  font-size: 15px;
  margin: 1em 0 0;
  padding: 1rem 2rem;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: #0068e6;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Checkbox = styled.div`
  margin: 0.75em 0;
`;

class MailingPage extends PureComponent {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Container>
            <div>
              <form
                action="//skycoin.us16.list-manage.com/subscribe/post?u=47a93630ab9172f29aff78b99&amp;id=264afe24a1" // eslint-disable-line max-len
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                ref={(node) => { this.form = node; }}
                target="_blank"
                noValidate
              >
                <Heading>Subscribe to our mailing list</Heading>
                <div className="mc-field-group">
                  <Label htmlFor="mce-EMAIL">
                    Email Address
                  </Label>
                  <Input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <Checkbox className="mc-field-group input-group">
                  <input
                    type="checkbox"
                    value="1"
                    name="group[1057][1]"
                    id="mce-group[1057]-1057-0"
                  />
                  <Label htmlFor="mce-group[1057]-1057-0" checked>{' I\'m Interested in a Skywire Miner'}</Label>
                </Checkbox>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                  <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                </div>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_47a93630ab9172f29aff78b99_264afe24a1"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <StyledSubmit
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </form>
            </div>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default MailingPage;
