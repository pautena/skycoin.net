import React from 'react';
import Link from 'components/Link';

const PageLinks = () => (
  <div style={{ opacity: 0, position: 'absolute' }}>
    <Link to="/orderskyminer" />
    <Link to="/buy" />
    <Link to="/gallery" />
  </div>
);

export default PageLinks;
