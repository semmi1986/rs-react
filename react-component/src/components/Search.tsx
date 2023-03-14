import { Button, Input } from '@chakra-ui/react';

function Search() {
  return (
    <div className="search__block">
      <Input width="50%" placeholder="Search" />
      <Button colorScheme="blue">Submit</Button>
    </div>
  );
}

export default Search;
