import { Box, Grid, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { SearchByFieldForm } from "../../../lib/atoms/SearchByFieldForm/SearchByField";
import { InputVariant } from "../../../lib/theme/components/Input";
import { HealthChart } from "./HealthChart/HealthChart";
import { HeartRateChart } from "./HearthRate/Index";
import { styles } from "./styles";

function SearchBox() {
  return (
    <Box>
      <SearchByFieldForm
        {...{
          mutationKey: "dashboard-search",
          queryCallback: (field: string, value: string) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve("hello");
              }, 1000);
            });
          },
          variant: InputVariant.SearchForm,
          placeholder: "Search for doctors ...",
          fields: ["All Specialist"],
        }}
      />
    </Box>
  );
}

function DateFilter() {
  return (
    <Box>
      <Text>calender filter</Text>
    </Box>
  );
}

function AppointmentTable() {
  return <Text>Table</Text>;
}

function Column1() {
  return (
    <VStack {...styles.column1wrapper}>
      {/* --------- ROW-------- */}
      <Grid {...styles.c1r1}>
        <SearchBox />
        <DateFilter />
      </Grid>
      {/* --------- ROW-------- */}
      <HStack>
        <HealthChart />
      </HStack>
      {/* --------- ROW-------- */}
      <Grid {...styles.c1r3}>
        <HeartRateChart />
        <Text>temp</Text>
        <Text>checkup</Text>
      </Grid>
      {/* --------- ROW-------- */}
      <Stack>
        <AppointmentTable />
      </Stack>
    </VStack>
  );
}

function Column2() {
  return (
    <VStack {...styles.column2wrapper}>
      <Text>wow</Text>
    </VStack>
  );
}

function Dashboard() {
  return (
    <Grid {...styles.wrapper}>
      <Column1 />
    </Grid>
  );
}

export default Dashboard;
