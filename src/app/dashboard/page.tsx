
import { getTrainningSessions, TrainningSession } from "./actions/create_trainning_session";
import RunningDashboardForm from "./components/dashboardForm";
import DashboardLineChart from "./components/dashboardLineChart";
import RunningDashboardTable from "./components/dashboardTable";

export default async function Dashboard() {
    const sessions: TrainningSession[] = await getTrainningSessions();

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <RunningDashboardForm />
                <RunningDashboardTable />
                <DashboardLineChart sessions={sessions} />
            </div>
        </>
    )
}