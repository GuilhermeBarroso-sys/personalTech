import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { TransactionContext } from "../../../context/transactionContext";

export function DoughnutChart() {

	const {transactions} = useContext(TransactionContext);
	const [incomeValue, setIncomeValue] = useState(0);
	const [outcomeValue, setOutcomeValue] = useState(0);

	function buildChart() {
		const transactionsValues = {
			income: 0,
			outcome: 0,
		};
		for(const {value,type} of transactions) {
			type == "income" ? transactionsValues.income+=value :transactionsValues.outcome+=value;
		}
		const {income,outcome} = transactionsValues;
		setIncomeValue(income);
		setOutcomeValue(outcome);

	}
	useEffect(() => {
		buildChart();
	});

	return (
		<Doughnut 
			data={{
				labels: ["income", "outcome"],
				datasets: [
					{
						label: "income",
						data: [[incomeValue], [outcomeValue] ],
						borderColor: ["#59f7ed", "#FF6384"],
						backgroundColor: ["#59f7ed80", "#ff638480"],
					},
				],
			}}
			options={{
				responsive: true,
				backgroundColor: "#ffffff",
				plugins: {
					legend: {
						display: false
					}
				},
			}}
		/>

	);
}