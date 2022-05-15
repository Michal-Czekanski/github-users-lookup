import { COLORS } from '../../assets/colors';
import { HELP_TEXT } from '../../assets/strings';
import React from 'react';
import Message from '../Message/Message';
import infoIcon from '../../assets/icons/64/info-primary.svg';

function HelpMessage (props) {
  return (
    <Message
      text={HELP_TEXT}
      icon={infoIcon}
      color={COLORS.bright} />
  );
}

export default HelpMessage;
