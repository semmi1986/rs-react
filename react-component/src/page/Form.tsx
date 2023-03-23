/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { Component, createRef } from 'react';
import Title from '../components/Title';

interface FormState {
  arrItem: [
    {
      id: number;
      title: string;
      description: string;
      category: string;
      data: string;
      price: string | undefined;
      img: string;
    }
  ][];
}

export default class Form extends Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      arrItem: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formRef = createRef<HTMLFormElement>();

  titleRef = createRef<HTMLInputElement>();

  descRef = createRef<HTMLTextAreaElement>();

  categoryRef = createRef<HTMLSelectElement>();

  dataRef = createRef<HTMLInputElement>();

  priceRef = createRef<HTMLInputElement>();

  imgRef = createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (this.state.arrItem as [object]).push({
      id: this.state.arrItem.length + 1,
      title: this.titleRef.current?.value,
      description: this.descRef.current?.value,
      category: this.categoryRef.current?.value,
      data: this.dataRef.current?.value,
      price: this.priceRef.current?.value,
      img: URL.createObjectURL(
        this.imgRef.current?.files![0] as Blob | MediaSource
      ),
    });
    this.setState({ arrItem: this.state.arrItem });
    this.formRef.current?.reset();
    console.log(this.state.arrItem);
  };

  render() {
    return (
      <div>
        <Title>Form</Title>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <FormControl mb={3}>
            <FormLabel>Title</FormLabel>
            <Input placeholder="product name" ref={this.titleRef} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="description..." ref={this.descRef} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Data</FormLabel>
            <Input type="datetime-local" ref={this.dataRef} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Price</FormLabel>
            <Input type="number" ref={this.priceRef} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              ref={this.imgRef}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category" ref={this.categoryRef}>
              <option>Phone</option>
              <option>laptop</option>
            </Select>
          </FormControl>

          <Stack direction="row" mb={3}>
            <Radio>New product</Radio>
            <Radio>Used product</Radio>
          </Stack>

          <Box>
            <Checkbox>I agree</Checkbox>
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
      </div>
    );
  }
}
