import { InputHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ITransactions } from "../../../context/transactionContext";


interface ITransactionsTableProps {
  transactions: ITransactions[] 
  searchCallback: (transactionRecords : ITransactions[]) => void
}
export function TransactionsSearch({transactions, searchCallback} : ITransactionsTableProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [transactionRecords, setTransactionsRecords] = useState<ITransactions[]|null>(null);
	useLayoutEffect(() => {
		if(transactionRecords) {
			searchCallback(transactionRecords);
		}

	}, [transactionRecords]);
	return (
		<>
  
			<input
				type="search"
				ref={inputRef}
				className=" form-control block w-10/12 mr-3  px-3 py-3.5 text-base font-normal text-white focus:text-white bg-[#272A2F] bg-clip-padding border-none  transition ease-in-out m-0 rounded-lg focus:bg-[#272A2F] focus:border-[#3e4553] focus:outline-none"
				id="exampleSearch"
				placeholder="Type some transaction"
			/>
			<button className="border-solid border-green-700 border-4 w-auto px-12 text-green-500 text-lg" onClick={async () => {
			
				setTransactionsRecords(transactions.filter((transaction) => transaction.name == inputRef.current?.value));
				
			}}>
				<div className="flex justify-between ">
  
					<p className="text-lg font-bold"> Search</p> 
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>

				</div>

			</button>
		</>
	);
}