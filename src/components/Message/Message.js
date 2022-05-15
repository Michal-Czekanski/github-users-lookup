import React from 'react';
import PropTypes from 'prop-types';
import { Container, MessageText } from './Message.styled';

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

export default Message;
