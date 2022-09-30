import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { TransactionContext } from "../../../context/transactionContext";

export function LineChart() {
	const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	const {transactions} = useContext(TransactionContext);
	const [incomeWeek, setIncomeWeek] = useState<Array<number>>([]);
	const [outcomeWeek, setOutcomeWeek] = useState<Array<number>>([]);

  
	function buildChart() {
		const incomeDayOfWeek = {
			Monday: 0,
			Tuesday: 0,
			Wednesday: 0,
			Thursday: 0,
			Friday: 0,
			Saturday: 0,
			Sunday: 0,
		};
		const outcomeDayOfWeek = {
			Monday: 0,
			Tuesday: 0,
			Wednesday: 0,
			Thursday: 0,
			Friday: 0,
			Saturday: 0,
			Sunday: 0,
		};
		for(const {weekDay,value, type} of transactions) { 
			type == "income" ? incomeDayOfWeek[weekDay] += value : outcomeDayOfWeek[weekDay]+= value;
		}
		const incomeTotal = Object.values(incomeDayOfWeek).map((value) => { return value;});
		const outcomeTotal = Object.values(outcomeDayOfWeek).map((value) => { return value;});
		setIncomeWeek(incomeTotal);
		setOutcomeWeek(outcomeTotal);

	}
	useEffect(() => {
		buildChart();
	}, [transactions]);
	return (
		<Line data={{
			labels,
			datasets: [
				{
					label: "income",
					data: incomeWeek,
					borderColor: "#59f7ed",
					backgroundColor: "#59f7ed80",
				},
				{
					label: "outcome",

					data: outcomeWeek,
					borderColor: "#FF6384",
					backgroundColor: "#ff638480",
				},
        
			]
		}} options={{
			responsive: true,
			scales: {
				x: {
					grid: {
						color: "grey"
					},
					ticks: {
						color: "#ffffff"
					}
				},
				y: {
					ticks: {
						color: "#ffffff"
					},
					grid: {
						color: "grey"
					},
				},
			},
			backgroundColor: "#ffffff",
			plugins: {
      
				legend: {
					labels: {
						color: "#ffffff"
					},
					position: "top" as const,
				},
			},
      
      
		}} />
	);
}