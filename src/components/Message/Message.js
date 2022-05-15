import React from 'react';
import PropTypes from 'prop-types';
import { Container, MessageText } from './Message.styled';
import { COLORS } from '../../assets/colors';
import { HELP_TEXT } from '../../assets/strings';
import infoIcon from '../../assets/icons/64/info-primary.svg';
import errorIcon from '../../assets/icons/64/error.svg';

function Message (props) {
  return (
    <Container>
      <img src={props.icon} />
      <MessageText color={props.color}>
        {props.text}
      </MessageText>
    </Container>
  );
}

Message.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
};

export function HelpMessage (props) {
  return (
    <Message
      text={HELP_TEXT}
      icon={infoIcon}
      color={COLORS.bright} />
  );
}

export function ErrorMessage (props) {
  return (
    <Message
      text={`User "${props.username}" found.`}
      icon={errorIcon}
      color={COLORS.error} />
  );
}

ErrorMessage.propTypes = {
  username: PropTypes.string.isRequired
};
