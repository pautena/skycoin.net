import React, { PureComponent } from 'react';
import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

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
        <Container>
          <div id="mc_embed_signup">
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
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to our mailing list</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div className="mc-field-group input-group">
                  <strong>Options </strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        value="1"
                        name="group[1057][1]"
                        id="mce-group[1057]-1057-0"
                      />
                      <label htmlFor="mce-group[1057]-1057-0" checked>{' I\'m Interested in a Skywire Miner'}</label>
                    </li>
                  </ul>
                </div>
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
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MailingPage;
