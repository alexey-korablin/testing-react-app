import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {
    header: 'Default header',
    description: 'Default description',
  };

  render() {
    const { header, description } = this.props;
    return (
      <div data-testid='HeadlineComponent'>
        <h1 data-testid='header'>{header}</h1>
        <p data-testid='description'>{description}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempProps: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.number,
      email: PropTypes.string,
      fName: PropTypes.string,
      lName: PropTypes.string,
      onlineStatus: PropTypes.bool,
    }),
  ),
};
