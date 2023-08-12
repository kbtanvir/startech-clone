import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import { InputVariant } from "../../theme/components/Input";
import { SelectDropdown } from "../Form/SelectDropdown/SelectDropdown";
import { SearchForm } from "./SearchForm";
import { styles } from "./styles";

export function SearchByFieldForm({
  fields,
  queryCallback,
  mutationKey,
  placeholder,
}: {
  fields?: string[];
  queryCallback: (field: string, value: string) => Promise<any>;
  mutationKey: string;
  placeholder?: string;
}) {
  const [field, setField] = useState(fields?.[0] || "");

  return (
    <Grid {...styles.wrapper}>
      <SearchForm
        variant={InputVariant.SearchFormWhite}
        mutationKey={mutationKey}
        queryCallback={e => queryCallback(field, e)}
        placeholder={placeholder}
      />
      <SelectDropdown
        options={
          fields?.map(field => ({
            value: field,
            label: field.toUpperCase(),
          })) || []
        }
        onChange={v => setField(v)}
      />
    </Grid>
  );
}
