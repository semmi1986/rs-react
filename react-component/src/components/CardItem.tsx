import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  WrapItem,
  Box,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import { DataState } from '../types';

export default class CardItem extends Component<DataState> {
  render() {
    const { title, images, description, price } = this.props;
    return (
      <WrapItem>
        <Card
          w="sm"
          h="500px"
          m="10px"
          bgGradient="linear(to-t, #d6d6d6, #3182ce)"
        >
          <CardBody>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src={images[0]}
                alt={title}
                borderRadius="lg"
                boxSize="200px"
                mb={2}
              />
            </Box>
            <Stack
              spacing="8"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading size="md">Living room Sofa</Heading>
              <Text fontSize="0.7rem">{description}</Text>
              <Text color="rgba(228, 76, 76, 0.976)" fontSize="2xl">
                ${price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </CardFooter>
        </Card>
      </WrapItem>
    );
  }
}
