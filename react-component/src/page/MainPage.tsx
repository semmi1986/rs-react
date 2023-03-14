import { Center, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { Component } from 'react';
import Search from '../components/Search';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Center mb={3}>
          <Text fontWeight="bold" color="#3182ce" fontSize="1.9rem">
            Home page
          </Text>
        </Center>
        <Search />
        <Wrap>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200" />
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200" />
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
