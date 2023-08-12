import { ComponentStyleConfig } from "@chakra-ui/react";

export enum TextAreaVariant {
  "primary" = "primary",
}

export const TextAreaStyle = {
  variants: {
    [TextAreaVariant.primary]: {
      bg: "transparent",
      color: "white",
      mt: "0 !important",
      h: "120px",
      border: "1px solid ",
      borderColor: "gold",
      py: "4",
      fontSize: "18px",
      _placeholder: {
        color: "gray.200",
      },
    },
  },
  defaultProps: {
    // size: "lg",
    variant: TextAreaVariant.primary,
  },
} as ComponentStyleConfig;
