import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsFillCaretDownFill } from "react-icons/bs";
import { DropdownOptions, FormField } from "../../../hooks/useHookForm";
import { styles } from "./styles";

export function SelectDropdown({
  options,
  formKey,
  defaultValue,
  onChange,
  placeHolder,
}: {
  options: DropdownOptions;
  formKey?: any;
  defaultValue?: string;
  onChange?: (e: any) => void;
  placeHolder?: string;
}) {
  const formService = useFormContext<FormField<any>>();
  const [value, setValue] = useState(options[0] ? options[0].value : "");

  useEffect(() => {
    if (defaultValue && formKey) {
      formService.setValue(formKey, defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formKey, defaultValue]);

  function handleChange(value: any) {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsFillCaretDownFill size={"12"} />}
        sx={styles.dropdownButtonSX}
        // variant={ButtonVariant.dropdownButton}
        {...styles.dropdownButton}
        color={
          formKey && formService.watch(formKey) ? "violet.900" : "violet.400"
        }
      >
        {`${
          (formKey && formService.watch(formKey as any)) || placeHolder || value
        }`}
      </MenuButton>
      <MenuList {...styles.dropdownWrapper}>
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.label}
            {...styles.dropdownItem}
            onClick={e => {
              formKey && formService.setValue(formKey as any, option.value);
              handleChange(option.value);
            }}
            bg={
              formKey && formService.watch(formKey as any) === option.value
                ? "gray.100"
                : "white"
            }
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
