import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("api/auth/signin");
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
