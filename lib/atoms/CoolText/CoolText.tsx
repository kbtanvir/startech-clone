import { Text } from "@chakra-ui/react";

export function CoolText({ text, bg }: { text: string; bg?: string }) {
  return (
    <Text
      {...{
        fontWeight: 700,
        fontSize: [200, "302px"],
        lineHeight: "365px",
        textTransform: "uppercase",
        background:
          bg || "linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)",
        backgroundClip: "text",
      }}
    >
      {text}
    </Text>
  );
}


