import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	ArcElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarElement,

} from "chart.js";
import { BulletList } from "react-content-loader";
import { Header } from "../Header";
import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";
import { LineChart } from "./LineChart";
import { RecentTransactions } from "./RecentTransactions";

export function DashboardContent() {
	ChartJS.register(
		CategoryScale,
		BarElement,
		ArcElement,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);


	return (
		<>
		
			<section className="min-h-screen bg-[#313131] xl:w-4/5 w-full  rounded-3xl ">
				<Header />
				<div className="xl:ml-16 mt-20">

					<h1 className="mb-8 xl:text-left text-center">Activities</h1>
					<div className="flex flex-col xl:flex-row items-center  ">

						<div className="bg-[#272A2F] rounded-lg xl:w-4/6 p-5 gradient w-5/6  transition-all ">
							<LineChart />
						</div>
          
						<div className="flex w-4/6  flex-col xl:ml-32 items-center xl:mt-0 mt-16 ">
							<h1 className="mb-8">This month</h1>
							<div className="mb-5">
								<DoughnutChart />
							</div>
						</div>
					</div>	
			
					<div className="">
						<h1 className=" mt-8 mb-8 xl:text-left text-center">Recent transactions</h1>	

						{ true ? <RecentTransactions /> : <div> <BulletList width={"400"} className="mx-auto xl:mx-0"   backgroundColor="#272a2f" /></div> }
					</div>
			
		
				</div>
      
			</section>
		</>

	);
}