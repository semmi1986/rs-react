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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import Title from '../components/Title';

interface FormState {
  arrItem: [
    {
      id: number;
      title: string;
      description: string;
      category: string;
      data: string;
      price: number;
    }
  ][];
}

interface FormsProps {}

export default class Form extends Component<FormsProps, FormState> {
  constructor(props: FormsProps) {
    super(props);
    this.state = {
      arrItem: [],
    };
    // this.changeDescription = this.changeDescription.bind(this);
    // this.changeTitle = this.changeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  description = React.createRef<HTMLTextAreaElement>();

  titleInput = React.createRef<HTMLInputElement>();

  categorySelect = React.createRef<HTMLSelectElement>();

  dataSelect = React.createRef<HTMLInputElement>();

  priceInput = React.createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.state.arrItem.push({
      id: this.state.arrItem.length,
      title: this.titleInput.current?.value,
      description: this.description.current?.value,
      category: this.categorySelect.current?.value,
      data: this.dataSelect.current?.value,
      price: Number(this.priceInput.current?.value),
    });
    this.setState({ arrItem: this.state.arrItem });
  };

  // changeTitle(e: React.ChangeEvent<HTMLInputElement>) {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       valueForm: {
  //         ...prevState.valueForm,
  //         title: e.target.value,
  //       },
  //     };
  //   });
  // }

  // changeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       valueForm: {
  //         ...prevState.valueForm,
  //         description: e.target.value,
  //       },
  //     };
  //   });
  // }

  render() {
    return (
      <div>
        <Title>Form</Title>
        <form onSubmit={this.handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="product name"
              ref={this.titleInput}
              // value={this.state.valueForm.title}
              // onChange={this.changeTitle}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="description..."
              ref={this.description}
              // onChange={this.changeDescription}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Data</FormLabel>
            <Input type="datetime-local" ref={this.dataSelect} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Price</FormLabel>
            <NumberInput min={0}>
              <NumberInputField ref={this.priceInput} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Image</FormLabel>
            <Input type="file" accept="image/jpeg,image/png,image/gif" />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category" ref={this.categorySelect}>
              <option>Phone</option>
              <option>laptop</option>
            </Select>
          </FormControl>

          <Stack direction="row" mb={3}>
            <Radio value="1">New product</Radio>
            <Radio value="2">Used product</Radio>
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
