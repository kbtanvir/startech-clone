import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { FormProvider, useForm } from "react-hook-form";
import { InputVariant } from "../../theme/components/Input";
import { SearchIcon } from "../SVG/CustomIcons";
import { styles } from "./styles";

export function SearchForm({
  mutationKey,
  queryCallback,
  placeholder,
}: {
  mutationKey: string;
  queryCallback: (query: any) => Promise<any>;
  variant: InputVariant;
  placeholder?: string;
}) {
  const formService = useForm();
  const mutation = useMutation([mutationKey], (query: string) =>
    queryCallback(query)
  );

  const debouncedChangeHandler = debounce(e => {
    mutation.mutate(e.target.value);
  }, 500);

  return (
    <FormProvider {...formService}>
      <InputGroup>
        <Input
          _placeholder={{ color: "gray.600", fontWeight: "200" }}
          {...styles.searchField}
          onChange={debouncedChangeHandler}
          placeholder={placeholder || "Search ..."}
        />
        <InputLeftElement {...styles.searchIcon}>
          <SearchIcon />
        </InputLeftElement>
      </InputGroup>
    </FormProvider>
  );
}
