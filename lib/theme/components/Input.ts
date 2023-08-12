import { ComponentStyleConfig } from "@chakra-ui/react";

export enum InputVariant {
  "primary" = "primary",
  "text" = "text",
  "icon-white" = "icon-white",
  "icon-gray" = "icon-gray",
  SearchFormWhite = "SearchFormWhite",
  SearchForm = "SearchForm",
}

export const InputStyle = {
  variants: {
    [InputVariant.primary]: {
      field: {
        bg: "transparent",
        color: "white",
        mt: "0 !important",
        h: "48px",
        border: "1px solid ",
        borderColor: "gold",
        fontSize: "18px",
        _placeholder: {
          color: "gray.200",
        },
      },
    },
    [InputVariant.SearchFormWhite]: {
      field: {
        bg: "white",
        color: "gray.600",
        fontSize: "14px",
        border: "0",
        borderColor: "gray.300",
        fontWeight: "400",
        pl: "70px !important",
        pr: "20px !important",
        _placeholder: {
          color: "gray.500",
        },
      },
    },
    [InputVariant.SearchForm]: {
      field: {
        placeholder: "Search...",
        bg: "gray.100",
        color: "gray.600",
        fontSize: "14px",
        border: "0",
        fontWeight: "400",
        pl: "70px !important",
        pr: "20px !important",
        _placeholder: {
          color: "gray.500",
        },
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: InputVariant.primary,
  },
} as ComponentStyleConfig;
