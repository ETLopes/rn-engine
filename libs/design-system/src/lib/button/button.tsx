import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button(props: ButtonProps) {
  return (
    // create a react native Button component using TouchableOpacity
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
