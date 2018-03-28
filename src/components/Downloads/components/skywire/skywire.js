import React from 'react';
import DownloadsTable from 'components/DownloadsTable';

import content from './content';

const skywire = () => (
  <DownloadsTable title="downloads.skywire.heading" list={content} id="skywire" />
);

export default skywire;
