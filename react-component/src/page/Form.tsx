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
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Component, createRef } from 'react';
import Title from '../components/Title';

interface IFormCard {
  title: string;
  description: string;
  data: string;
  price: number;
  thumbnail: string;
  category: string;

  status: object;
  // brand: string;

  // discountPercentage: number;
  // id: number;

  // rating: number;
  // stock: number;
  // thumbnail: string;
}

interface FormState {
  errors: boolean[];
  arrItem: IFormCard[];
}

export default class Form extends Component<object, FormState> {
  formRef = createRef<HTMLFormElement>();
  titleRef = createRef<HTMLInputElement>();
  descRef = createRef<HTMLTextAreaElement>();
  dataRef = createRef<HTMLInputElement>();
  currentDate = new Date();
  priceRef = createRef<HTMLInputElement>();
  imgRef = createRef<HTMLInputElement>();
  categoryRef = createRef<HTMLSelectElement>();
  statusNewRef = createRef<HTMLInputElement>();
  statusUsedRef = createRef<HTMLInputElement>();
  agreeRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      errors: [false, false, false, false],
      arrItem: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  collectionError(numberFild: number) {
    this.state.errors.splice(numberFild, 1, true);
    this.setState({ errors: this.state.errors });
  }

  resetError(numberFild: number) {
    this.state.errors.splice(numberFild, 1, false);
    this.setState({ errors: this.state.errors });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedDateVal = this.dataRef.current?.value;
    const selectedDate = new Date(selectedDateVal as unknown as Date);

    // if (!this.titleRef.current?.value.match(/^[A-Z][a-z]*$/)) {
    //   this.collectionError(0);
    // }

    if (selectedDate.getTime() < this.currentDate.getTime()) {
      this.collectionError(1);
    }

    // if (!this.agreeRef.current?.checked) {
    //   this.collectionError(2);
    // }

    if (this.state.errors.every((err) => !err)) {
      this.submitForm();
    }

    // status: {
    //   newProduct: this.statusNewRef.current!.checked && 'New product',
    //   UsedProduct: this.statusUsedRef.current!.checked && 'Used product',
    // },
    // isAgree: this.agreeRef.current?.checked,
    // });
    console.log(this.state.arrItem);
  };

  submitForm() {
    if (
      this.titleRef.current !== null &&
      this.descRef.current !== null &&
      this.dataRef.current !== null &&
      this.priceRef.current !== null &&
      this.imgRef.current !== null &&
      this.categoryRef.current !== null
    ) {
      const newCard = {
        title: this.titleRef.current.value,
        description: this.descRef.current.value,
        data: this.dataRef.current.value,
        price: parseFloat(this.priceRef.current.value),
        thumbnail: URL.createObjectURL(
          this.imgRef.current?.files![0] as Blob | MediaSource
        ),
        category: this.categoryRef.current.value,
        status: {
          newProduct: this.statusNewRef.current!.checked && 'New product',
          UsedProduct: this.statusUsedRef.current!.checked && 'Used product',
        },
        // id: Date.now(),
        // brand: this.brand.current.value,

        // rating: 5,
        // stock: this.getStockValue() as number,
        // thumbnail: imgSrc,

        // discountPercentage: newDiscount,
      };
      const newArr = this.state.arrItem;
      newArr.push(newCard);
      // this.setState({ cardData: newArr, showModal: true });
      // setTimeout(() => {
      //   this.setState({ showModal: false });
      // }, 2000);
      this.formRef.current?.reset();
    }
  }

  render() {
    return (
      <div>
        <Title>Form</Title>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <FormControl mb={3}>
            <FormLabel>
              Title{' '}
              {this.state.errors[0] && (
                <Text color="red">
                  Field would not contain numbers, symbols and start with a
                  capital letter!
                </Text>
              )}
            </FormLabel>
            <Input
              placeholder="product name"
              ref={this.titleRef}
              onInput={() => this.resetError(0)}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="description..." ref={this.descRef} />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>
              Data{' '}
              {this.state.errors[1] && (
                <Text color="red">Select current time!</Text>
              )}
            </FormLabel>
            <Input
              type="datetime-local"
              ref={this.dataRef}
              onInput={() => this.resetError(1)}
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Price</FormLabel>
            <Input type="number" placeholder="Add price" ref={this.priceRef} />
          </FormControl>

          <FormControl isRequired mb={3}>
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
              <option>furniture</option>
            </Select>
          </FormControl>

          <RadioGroup mb={3}>
            <Stack direction="row">
              <Radio
                value="1"
                ref={this.statusNewRef}
                onInput={() => this.resetError(2)}
              >
                New product
              </Radio>
              <Radio
                value="2"
                onInput={() => this.resetError(2)}
                ref={this.statusUsedRef}
              >
                Used product
              </Radio>
            </Stack>
          </RadioGroup>
          <Box>
            {this.state.errors[2] && (
              <Text fontSize="1rem" fontWeight="bold" color="red">
                chose status product!
              </Text>
            )}
          </Box>

          <Box>
            <Checkbox ref={this.agreeRef} onInput={() => this.resetError(3)}>
              agree
            </Checkbox>
          </Box>
          <Box>
            {this.state.errors[3] && (
              <Text fontSize="1rem" fontWeight="bold" color="red">
                Are you agree?
              </Text>
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
      </div>
    );
  }
}
