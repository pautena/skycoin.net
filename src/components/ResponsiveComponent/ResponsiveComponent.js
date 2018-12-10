/* eslint-disable no-nested-ternary */
import React from 'react';
import { BREAKPOINTS as breakpoints } from '../../config';

const makeResponsiveComponent = Component => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      desktop: false,
    };
    this.mediaQueryState = [];
  }

  componentDidMount() {
    Object.keys(breakpoints).forEach((key) => {
      // create a new media query object using the window.matchMedia api.
      // Read more here: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
      const query = window.matchMedia(`(min-width: ${breakpoints[key]}rem)`);

      // add the breakpoint value to the media query object
      query.breakpoint = breakpoints[key];

      // add the name
      query.name = key;

      // create the function that will run each
      // time the breakpoint is changed
      function breakpointChange() {
        // this function will communicate with our reducer
        this.dispatchActiveQuery();
      }

      // Attach the even listener to the query
      query.addListener(breakpointChange.bind(this));

      // push this query to our mediaQueryState array,
      // after the loops has run its course, we will
      // have an array that houses a mediaQuery object
      // for each breakpoint in our breakpoints object.
      this.mediaQueryState.push(query);
    });

    // run the function once on componentDidMount to
    // record the initial breakpoint state of our viewport
    this.dispatchActiveQuery();
  }

  // create the function that will prepare our breakpoint object for dispatch
  dispatchActiveQuery() {
    // Assuming a desktop first responsive system, the active
    // breakpoint will always be the smallest one that satisfies
    // the media query. We use reduce to travel down the matched media queries
    // and return the smallest item that matches. In the event no breakpoints
    // match (such as when the viewport is larger than our largest breakpoint),
    // we return null
    const activeQuery = this.mediaQueryState.reduce((prev, curr) =>
      (curr.matches ? curr : prev && prev.matches ? prev : null));

    // In the event null was returned by activeQuery, we substitute 'default',
    // which will be the active breakpoint when no other breakpoint is matched
    const breakpointName = activeQuery ? activeQuery.name : 'default';

    // We will also record the numerical value for the matched breakpoint
    // as breakpointSize
    // const breakpointSize = activeQuery && activeQuery.breakpoint;

    // Now dispatch both values using the setActiveBreakpoint action
    this.setState({
      mobile: breakpointName === 'sm' || breakpointName === 'default',
      desktop: breakpointName !== 'sm' && breakpointName !== 'default',
    });
  }

  render() {
    const { mobile, desktop } = this.state;
    return <Component {...this.props} desktop={desktop} mobile={mobile} />;
  }
};

export default makeResponsiveComponent;
