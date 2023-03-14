import { Component } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { InputRightElement, Input, InputGroup } from '@chakra-ui/react';

type InputState = {
  value: string;
};

export default class Search extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: localStorage.getItem('search') ?? '' };
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    localStorage.setItem('search', e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="search__block">
        <InputGroup width="50%">
          <Input
            placeholder="Search"
            name="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
      </div>
    );
  }
}
