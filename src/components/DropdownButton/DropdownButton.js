import React from 'react';
import PropTypes from 'prop-types';
import arrowDownIcon from '../../assets/icons/32/arrow-down-dark.svg';
import arrowUpIcon from '../../assets/icons/32/arrow-up-dark.svg';
import { Button } from './DropdownButton.styled';

class DropdownButton extends React.Component {
  /**
   * Prevents default action and calls clickHandler.
   * @param {*} e event
   */
  handleClick = (e) => {
    e.preventDefault();
    this.props.clickHandler();
  };

  render () {
    let icon = arrowDownIcon;
    if (this.props.active) {
      icon = arrowUpIcon;
    }

    return (
      <Button onClick={this.handleClick}>
        <img src={icon} />
      </Button>
    );
  }

  static propTypes = {
    active: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
  };
}

export default DropdownButton;
