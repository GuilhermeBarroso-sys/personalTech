import { Sidebar } from "../../components/Sidebar";
import { TransactionsContent } from "../../components/TransactionsContent";

export function Transactions() {
	return (
		<div className="flex xl:flex-row flex-col min-h-screen items-stretch w-full">
			<Sidebar />
			<TransactionsContent />
		</div>
	); 
}