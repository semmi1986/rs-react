import React, { Component } from 'react';

import { Center, Text } from '@chakra-ui/react';

type TitleProps = {
  children: string;
};

export default class Title extends Component<TitleProps> {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Center mb={3}>
          <Text fontWeight="bold" color="#3182ce" fontSize="1.9rem">
            {children}
          </Text>
        </Center>
      </div>
    );
  }
}
