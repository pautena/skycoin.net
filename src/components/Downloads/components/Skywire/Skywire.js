import React from 'react';
import DownloadsTable from 'components/DownloadsTable';

import content from './content';

const Skywire = () => (
  <DownloadsTable title="downloads.skywire.heading" list={content} id="skywire" />
);

export default Skywire;
