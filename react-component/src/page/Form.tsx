/* eslint-disable @typescript-eslint/lines-between-class-members */
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
  RadioGroup,
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
      status: string;
      isAgree: boolean;
    }
  ][];
}

export default class Form extends Component<object, FormState> {
  formRef = createRef<HTMLFormElement>();
  titleRef = createRef<HTMLInputElement>();
  descRef = createRef<HTMLTextAreaElement>();
  categoryRef = createRef<HTMLSelectElement>();
  dataRef = createRef<HTMLInputElement>();
  priceRef = createRef<HTMLInputElement>();
  imgRef = createRef<HTMLInputElement>();
  statusNewRef = createRef<HTMLInputElement>();
  statusUsedRef = createRef<HTMLInputElement>();
  agreeRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      arrItem: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      status: {
        newProduct: this.statusNewRef.current!.checked && 'New product',
        UsedProduct: this.statusUsedRef.current!.checked && 'Used product',
      },
      isAgree: this.agreeRef.current?.checked,
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
          <FormControl isRequired mb={3}>
            <FormLabel>Title</FormLabel>
            <Input placeholder="product name" ref={this.titleRef} />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="description..." ref={this.descRef} />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Data</FormLabel>
            <Input type="datetime-local" ref={this.dataRef} />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Price</FormLabel>
            <Input type="number" ref={this.priceRef} />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              ref={this.imgRef}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category" ref={this.categoryRef}>
              <option>Phone</option>
              <option>laptop</option>
            </Select>
          </FormControl>

          <RadioGroup mb={3}>
            <Stack direction="row">
              <Radio value="1" ref={this.statusNewRef}>
                New product
              </Radio>
              <Radio value="2" ref={this.statusUsedRef}>
                Used product
              </Radio>
            </Stack>
          </RadioGroup>

          <Box>
            <Checkbox ref={this.agreeRef}>I agree</Checkbox>
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
