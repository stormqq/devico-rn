import React, { useState } from "react";
import { Button, Input, XStack } from "tamagui";
import { Search } from "@tamagui/lucide-icons";

export const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (input: string) => void;
}) => {
  const [input, setInput] = useState("");
  return (
    <XStack padding="$2" alignItems="center" space="$2">
      <Input
        flex={1}
        placeholder="Search.."
        onChangeText={setInput}
        onSubmitEditing={() => handleSearch(input)}
        value={input}
      />
      <Button icon={Search} onPress={() => handleSearch(input)} />
    </XStack>
  );
};

export default SearchBar;
