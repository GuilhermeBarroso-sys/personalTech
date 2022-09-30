import { useContext, useState } from "react";
import { TransactionContext } from "../../../context/transactionContext";
interface IRecentTransactionsProps {
  limit?: number
}
export function RecentTransactions({ limit } : IRecentTransactionsProps) {

	const {transactions} =useContext(TransactionContext);
	return (
		<nav>
			<ul>
				{
					transactions.length ? transactions.slice(0, limit).map(({id,date,name,type, value}) => {
						const color = type == "outcome" ? "#FF6384" :"#59f7ed";
						const valueColor = type == "outcome" ? "text-[#FF6384]": "text-[#59f7ed]";
						const operator = type == "outcome" ? "-" :"+"; 
						return (
							<li className="mb-6 flex xl:justify-start justify-center" key={id}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" color={color} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 rounded-lg  mr-3">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<div className="text-[#DFDFDE]">
									<h3 className="text-2xl"> {name} <small className={`${valueColor} text-base `}><span>{operator}${value} </span></small></h3>
									<p className="text-lg">{date}</p>
    
								</div>
							</li>
						);
					})
						: <h3 className="text-2xl font-normal">No data here :) </h3>
          
				}
			
				
        
			</ul>
		</nav>
	);
}