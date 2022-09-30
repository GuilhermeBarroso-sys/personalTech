import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { TransactionContext } from "../../../context/transactionContext";

export function BarChart() {

  
	return (
		<Bar data={{
			labels: ["income, outcome"],
			datasets: [{
				label: "income",
				data: [[500, 700, 1000 , 300, 500, 400, 600 ].reduce((total, current) =>  total + current, 0)],
				borderColor: "#59f7ed",
				backgroundColor: "#59f7ed80",
			},
			{
				label: "outcome",

				data: [[95, 200, 1200 , 500, 400, 100, 50].reduce((total, current) => total + current, 0)],
				borderColor: "#FF6384",
				backgroundColor: "#ff638480",
				borderWidth: 1
			},]
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
      
      
		}}/>
	);
}