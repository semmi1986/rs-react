import { Center, Text } from '@chakra-ui/react';

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
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

export default Title;
