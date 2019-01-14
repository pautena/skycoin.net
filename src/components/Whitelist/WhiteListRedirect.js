import React from 'react';

export default class WhiteListRedirect extends React.Component {
  componentDidMount() {
    window.location = 'https://whitelist.skycoin.net';
  }

  render() {
    return null;
  }
}
