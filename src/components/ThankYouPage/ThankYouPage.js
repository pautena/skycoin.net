import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import Header from 'components/Header';
import Footer from 'components/Footer';
import FullScreenMessage from '../FullScreenMessage';

class ThankYouPage extends PureComponent {
    render(){
        return(
            <div>
                <Helmet>
                    <title>Thank you!</title>          
                </Helmet>
                <Header />
                <FullScreenMessage>    
                    <FormattedMessage id="thankYou.message" />
                </FullScreenMessage>        
                <Footer />
            </div>
        );
    }
}

export default injectIntl(ThankYouPage);