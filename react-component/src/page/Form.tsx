/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
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
  valueForm: {
    title: string;
    description: string;
  };
}

interface FormsProps {}

export default class Form extends Component<FormsProps, FormState> {
  constructor(props: FormsProps) {
    super(props);
    this.state = {
      valueForm: {
        title: '',
        description: '',
      },
    };

    this.changeDescription = this.changeDescription.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(this.state.valueForm);
    e.preventDefault();
    this.setState({
      valueForm: {
        title: '',
        description: '',
      },
    });
  }

  changeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => {
      return {
        ...prevState,
        valueForm: {
          ...prevState.valueForm,
          title: e.target.value,
        },
      };
    });
  }

  changeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState((prevState) => {
      return {
        ...prevState,
        valueForm: {
          ...prevState.valueForm,
          description: e.target.value,
        },
      };
    });
  }

  render() {
    return (
      <div>
        <Title>Form</Title>
        <form onSubmit={this.handleSubmit}>
          <FormControl isRequired mb={3}>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="product name"
              value={this.state.valueForm.title}
              onChange={this.changeTitle}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="description..."
              value={this.state.valueForm.description}
              onChange={this.changeDescription}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Data</FormLabel>
            <Input type="datetime-local" />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Price</FormLabel>
            <NumberInput min={0}>
              <NumberInputField />
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
            <Select placeholder="Select category">
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
