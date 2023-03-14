import React, { Component } from 'react';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';

export default class Cards extends Component<unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Wrap>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              item 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              item 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              item 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              item 1
            </Center>
          </WrapItem>
        </Wrap>
      </div>
    );
  }
}
