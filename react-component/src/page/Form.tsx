/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  Wrap,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CardItem from '../components/CardItem';
import Title from '../components/Title';
import { IFormCard } from '../types';

function Form() {
  const [products, setProducts] = useState<IFormCard[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormCard>();

  const handleProducts: SubmitHandler<IFormCard> = (data) => {
    const newProduct = {
      id: Date.now(),
      ...data,
      thumbnail: URL.createObjectURL(data.thumbnail[0] as unknown as Blob),
    };

    setProducts([...products, newProduct]);
    if (isValid) {
      reset();
    }
    setTimeout(() => alert('Card added to your list'), 500);
  };
  console.log(products);

  return (
    <div>
      <Title>Form</Title>
      <form onSubmit={handleSubmit(handleProducts)}>
        <FormControl isRequired mb={3}>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="product name"
            {...register('title', {
              // required: 'The field is required',
              pattern: {
                value: /^[A-Z].*/,
                message: 'Starts with a capital letter',
              },
            })}
          />
          {errors.title?.message && (
            <Text color="red">{errors.title.message}!</Text>
          )}
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="description..." {...register('description')} />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Data</FormLabel>
          <Input
            type="datetime-local"
            {...register('date', { required: 'The field is required' })}
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            placeholder="Add price"
            {...register('price', { required: 'The field is required' })}
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Image</FormLabel>
          <Input
            type="file"
            accept="image/*"
            {...register('thumbnail', { required: 'The field is required' })}
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select category"
            {...register('category', { required: 'The field is required' })}
          >
            <option>Phone</option>
            <option>laptop</option>
            <option>furniture</option>
          </Select>
        </FormControl>

        <RadioGroup mb={3} aria-label="toggle">
          <Stack direction="row">
            <Radio
              value="New product"
              {...register('status', {
                required: 'The field is required',
              })}
            >
              New product
            </Radio>
            <Radio
              value="Used product"
              {...register('status', {
                required: 'The field is required',
              })}
            >
              Used product
            </Radio>
          </Stack>
          {errors.status?.message && (
            <Text color="red">{errors.status.message}</Text>
          )}
        </RadioGroup>

        <Box>
          <Checkbox
            {...register('isAgree', {
              required: 'Are you agree?',
            })}
          >
            Agree
          </Checkbox>
          {errors.isAgree?.message && (
            <Text color="red">{errors.isAgree.message}</Text>
          )}
        </Box>

        <Button
          textTransform="uppercase"
          p="0 2rem"
          colorScheme="blue"
          type="submit"
        >
          create card
        </Button>
      </form>
      <Wrap>
        {products.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            price={item.price}
          />
        ))}
      </Wrap>
    </div>
  );
}

export default Form;
