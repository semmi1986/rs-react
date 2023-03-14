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
              spacing="3"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading size="md">{title}</Heading>
              <Text fontSize="1rem">{description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Text color="rgba(228, 76, 76, 0.976)" fontSize="2xl">
              ${price}
            </Text>
          </CardFooter>
        </Card>
      </WrapItem>
    );
  }
}
