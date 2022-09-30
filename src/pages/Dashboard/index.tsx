import { DashboardContent } from "../../components/DashboardContent";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Dashboard() {
	return (
		<div className="flex xl:flex-row flex-col min-h-screen items-stretch w-full">
			<Sidebar />
			<DashboardContent />
  
		</div>
	);
}