import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import ArchitectureOverview from '../ArchitectureOverview';
import Downloads from '../Downloads';
import Infographics from '../Infographics';
import WhitepapersPage from '../WhitepapersPage';
import NotFound from '../NotFound';
import RoadmapPage from '../RoadmapPage';
import MailingPage from '../MailingPage';
import TeamPage from '../TeamPage';
import Ecosystem from '../Ecosystem';
import Skyminer from '../Skyminer';
import Skywire from '../Skywire';
import SkywireLanding from '../SkywireLanding';
import CXO from '../CXO';
import CX from '../CX';
import Fiber from '../Fiber';
import Jobs from '../JobsPage';
import WhiteListRedirect from '../Whitelist/WhiteListRedirect';
import WhitelistForm from '../WhitelistForm';
import SkyminerForm from '../SkyminerForm';
import Obelisk from '../Obelisk';
import GalleryPage from '../GalleryPage';
import BuyFiatPage from '../BuyFiatPage/BuyFiatPage';
import BuyOptionsPage from '../BuyOptionsPage/BuyOptionsPage';
import ThankYouPage from '../ThankYouPage';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';
  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
      <Route path={`${prefix}downloads`} exact component={Downloads} />
      <Route path={`${prefix}whitepapers`} component={WhitepapersPage} />
      <Route path={`${prefix}infographics`} exact component={Infographics} />
      <Route path={`${prefix}architecture-overview`} exact component={ArchitectureOverview} />
      <Route path={`${prefix}roadmap`} exact component={RoadmapPage} />
      <Route path={`${prefix}mailing-list`} exact component={MailingPage} />
      <Route path={`${prefix}buy`} exact component={BuyOptionsPage} />
      <Route path={`${prefix}team`} exact component={TeamPage} />
      <Route path={`${prefix}ecosystem`} exact component={Ecosystem} />
      <Route path={`${prefix}skyminer`} exact component={Skyminer} />
      <Route path={`${prefix}skywire`} exact component={Skywire} />
      <Route path={`${prefix}landing/skywire`} exact component={SkywireLanding} />
      <Route path={`${prefix}cxo`} exact component={CXO} />
      <Route path={`${prefix}cx`} exact component={CX} />
      <Route path={`${prefix}fiber`} exact component={Fiber} />
      <Route path={`${prefix}jobs`} exact component={Jobs} />
      <Route path={`${prefix}whiteList`} exact component={WhiteListRedirect} />
      <Route path={`${prefix}orderskyminer`} exact component={SkyminerForm} />
      <Route path={`${prefix}whiteListForm`} exact component={WhitelistForm} />
      <Route path={`${prefix}obelisk`} exact component={Obelisk} />
      <Route path={`${prefix}gallery`} exact component={GalleryPage} />
      <Route path={`${prefix}buy-fiat`} exact component={BuyFiatPage} />
      <Route path={`${prefix}thankyou`} exact component={ThankYouPage} />
      <Redirect from={`${prefix}whitepapers.html`} to={`${prefix}whitepapers`} />
      <Redirect from={`${prefix}infographics.html`} to={`${prefix}infographics`} />
      <Redirect from={`${prefix}downloads.html`} to={`${prefix}downloads`} />
      <Redirect from={`${prefix}faq.html`} to={`${prefix}`} />
      <Redirect from={`${prefix}index.html`} to={`${prefix}`} />
      <Redirect from={`${prefix}skyminerform`} to={`${prefix}orderskyminer`} />
      <Route path={`${prefix}*`} component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
