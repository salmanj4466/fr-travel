"use client";

import Quotation from "../quotation/page";
import DashboardShell from "../components/common/DashboardShell";

const Dashboard = () => {
  return (
    <DashboardShell>
      <div>
        <Quotation />
      </div>
    </DashboardShell>
  );
};

export default Dashboard;
