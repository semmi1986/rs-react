/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { InputRightElement, Input, InputGroup } from '@chakra-ui/react';

function Search() {
  const value = localStorage.getItem('search') ?? '';
  const [searchInput, setSearchInput] = useState(value);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', value);
    };
  }, []);

  const handleChange = (e: string) => {
    localStorage.setItem('search', e);
    setSearchInput(e);
  };

  return (
    <div className="search__block">
      <InputGroup width="50%">
        <Input
          placeholder="Search"
          name="search"
          value={searchInput}
          onChange={(e) => handleChange(e.target.value)}
        />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
    </div>
  );
}

export default Search;
