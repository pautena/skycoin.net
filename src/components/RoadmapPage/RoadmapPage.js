import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { values } from 'ramda';
import { COLOR } from 'config';
import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Roadmap from './components/Roadmap/Roadmap';

import past from './past.json';
import future from './future.json';

class RoadmapPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      past: past.data,
      future: future.data,
    };

    this.mergeByYear = this.mergeByYear.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
  }


  mergeByYear(list) {
    return list.reduce((acc, item) => {
      const name = item.year;
      const year = acc[name] ? acc[name] : [];

      return {
        ...acc,
        [name]: [
          ...year,
          {
            ...item,
          },
        ],
      };
    }, {});
  }

  markAsComplete(list) {
    return list.map(item => ({ ...item, status: 'completed' }));
  }

  render() {
    const { intl } = this.props;
    const pastList = this.markAsComplete(this.state.past);
    const list = [...pastList, ...this.state.future];
    const years = values(this.mergeByYear(list));

    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage({ id: 'roadmap.title' })}</title>
          <meta
            name="description"
            content={intl.formatMessage({ id: 'roadmap.description' })}
          />
        </Helmet>

        <Header border />
        <Container>
          <Heading heavy as="h2" my={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
            <FormattedMessage id="roadmap.heading" />
          </Heading>
          <Roadmap years={years} />
        </Container>
        <Footer />
      </div>
    );
  }
}

RoadmapPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(RoadmapPage);
