import Dashboard from "../features/dashboard/view/Index";
import Header from "../features/home/Header/Index";
import WithSidebar from "../layouts/WithSidebar/WithSidebar";

export default function Index() {
  return (
    <>
      <Header />
      <WithSidebar>
        <Dashboard />
      </WithSidebar>
    </>
  );
}
