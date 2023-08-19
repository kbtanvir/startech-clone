import { Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notify } from "../../../lib/utils/helper";
import { styles } from "./styles";

export function Sidebar() {
  return (
    <VStack {...styles.wrapper}>
      <Brands />
    </VStack>
  );
}

function Brands() {
  const demoData = {
    "data": [
      
        {
          "name": "Apple",
        },
        {
          "name": "Microsoft",
        },
        {
          "name": "Amazon",
        },
        {
          "name": "Lenovo",
        },
        {
          "name": "Samsung",
        },
        {
          "name": "Walton",
        },
        {
          "name": "Xiaomi",
        },
        {
          "name": "Huawei",
        },
        {
          "name": "Realme",
        },
        {
          "name": "Kidiby",
        },
    
    ],
  };

  const mutation = useMutation(
    async () => {
      const res = await fetch("/api/category", {
        method: "POST",
        body: JSON.stringify(demoData),
      });
      return await res.json();
    },
    {
      onSuccess() {
        notify({
          message: "Category saved successfully",
          type: "success",
        });
      },
    }
  );

  const categoryQuery = useQuery(["category-list"], () => {
    return fetch("/api/category").then(res => res.json());
  });

  if (categoryQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (categoryQuery.isError) {
    return <div>Error</div>;
  }

  return (
    <Grid>
      <Heading {...styles.title}>
        Brands ({categoryQuery.data.length}){" "}
        <Button
          onClick={async () => {
            await mutation.mutate();
          }}
        >
          Generate
        </Button>
      </Heading>
      <Grid {...styles.list}>
        {categoryQuery.data.map((item: any, index: any) => (
          <Text key={index} {...styles.item}>
            {item.name}
          </Text>
        ))}
      </Grid>
    </Grid>
  );
}
