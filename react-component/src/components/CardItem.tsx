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
import { DataState } from '../types';

function CardItem({ title, thumbnail, description, price }: DataState) {
  return (
    <div className="cards" data-testid="cards">
      <WrapItem>
        <Card w="sm" h="500px" m="10px" bg="#3182ce61">
          <CardBody>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src={thumbnail}
                alt="product image"
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
    </div>
  );
}

export default CardItem;
