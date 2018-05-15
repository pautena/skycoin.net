import React from 'react';
import styled from 'styled-components';

import { whiteListFormSrc } from 'config';
import Footer from 'components/Footer';
import Header from 'components/Header';


const Container = styled.div`
  overflow: hidden;
`;
const Iframe = styled.iframe`
  position: relative;
  top: -3px;
  min-height: 1920px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: -94px;
`;

export default class WhiteList extends React.PureComponent {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Header border />
        <Container>
          <Iframe src={whiteListFormSrc} />
        </Container>
        <Footer />
      </div>);
  }
}
