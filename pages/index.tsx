import Dashboard from "../features/dashboard/view/Index";
import WithSidebar from "../layouts/WithSidebar/WithSidebar";

export default function HomePage() {
  return (
    <>
      <WithSidebar>
        <Dashboard />
      </WithSidebar>
    </>
  );
}
