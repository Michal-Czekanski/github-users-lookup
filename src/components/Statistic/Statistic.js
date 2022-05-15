import React from 'react';
import { Container, Text } from './Statistic.styled';
import PropType from 'prop-types';
import { COLORS } from '../../assets/colors';

function Statistic (props) {
  let iconElemem = <></>;
  if (props.icon) {
    iconElemem = <img src={props.icon} />;
  }

  return (
    <Container
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
    >
      <Text textColor={props.textColor} >
        {props.name}
      </Text>
      {iconElemem}
      <Text textColor={props.textColor}>
        {props.value}
      </Text>
    </Container>
  );
}

Statistic.propTypes = {
  // content
  name: PropType.string,
  icon: PropType.string,
  value: PropType.string.isRequired,

  // styles
  backgroundColor: PropType.string.isRequired,
  borderColor: PropType.string.isRequired,
  textColor: PropType.string.isRequired
};

//
// StatisticPrimary
//

export function StatisticPrimary (props) {
  return (
    <Statistic
      name={props.name}
      icon={props.icon}
      value={props.value}
      backgroundColor={COLORS.primary}
      borderColor={COLORS.primaryLight}
      textColor={COLORS.bright}
    />
  );
}

StatisticPrimary.propTypes = {
  name: PropType.string,
  icon: PropType.string,
  value: PropType.string.isRequired
};

//
// Statistic secondary
//

export function StatisticSecondary (props) {
  return (
    <Statistic
      name={props.name}
      icon={props.icon}
      value={props.value}
      backgroundColor={COLORS.bright}
      borderColor={COLORS.primary}
      textColor={COLORS.primary}
    />
  );
}

StatisticSecondary.propTypes = {
  name: PropType.string,
  icon: PropType.string,
  value: PropType.string.isRequired
};
