import { HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Card } from "../Card/Card";
import { styles } from "./styles";

type Props = {
  navList: {
    text: string;
    url: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
};

export function Navigation({ navList }: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Card styles={styles.card}>
      <VStack {...styles.wrapper}>
        {navList.map((item, i) => (
          <HStack
            key={i}
            {...styles.listItem}
            onClick={item.onClick}
            fontWeight={router.pathname.toString() === item.url ? 800 : 600}
            borderColor={
              router.pathname.toString() === item.url
                ? "brand.100"
                : "transparent"
            }
            backgroundColor={
              router.pathname.toString() === item.url
                ? "brand.50"
                : "transparent"
            }
          >
            <Text
              {...styles.menuText}
              color={
                router.query.group && router.query.group === item.url
                  ? "gray.900"
                  : "gray.500"
              }
            >
              {t(item.text)}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Card>
  );
}
