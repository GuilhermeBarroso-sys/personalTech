import { useContext, useEffect, useState } from "react";
import { ITransactions, ITransactionsInfo, TransactionContext } from "../../context/transactionContext";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { TransactionsBox } from "./TransactionsBox";
import { TransactionsSearch } from "./TransactionsSearch";
import { TransactionsTable } from "./TransactionsTable";

export function TransactionsContent() {

	const {transactions,updateTransactions} = useContext(TransactionContext);
	const [persistentTransactions, setPersistentTransactions] = useState<ITransactions[]>([]);
	const [totalIncome, setTotalIncome] = useState(0);
	const [totalOutcome, setTotalOutcome] = useState(0);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	function toggleModal() {
		setModalIsOpen(!modalIsOpen);
	}
	const [total, setTotal] = useState(0);
	function getTransactionsInfo(transactions : ITransactions[]) : ITransactionsInfo {
		const tmpTotalIncome : Array<number> = [];
		const tmpTotalOutcome : Array<number> = [];
		for(const {type,value} of transactions) {
			type == "income" ? tmpTotalIncome.push(value) : tmpTotalOutcome.push(value);
		}
		const totalIncome = tmpTotalIncome.reduce((prev, current) => { return prev + current;} , 0);
		const totalOutcome = tmpTotalOutcome.reduce((prev, current) => { return prev + current;} , 0);
		const total = totalIncome - totalOutcome;
		return {
			totalIncome,
			totalOutcome,
			total
		};
	}

	function handleCallbackSearch(records: ITransactions[] ) : void{
		if(records.length) {
      
			updateTransactions(records);
		} else {
			alert("No records found");
	
			updateTransactions(persistentTransactions);
		}
	}
  
	useEffect(() => {
		const {totalIncome,totalOutcome,total} = getTransactionsInfo(transactions);
		setTotalIncome(totalIncome);
		setTotalOutcome(totalOutcome);
		setTotal(total);
		setPersistentTransactions(transactions);
	}, []);

	return (
		<section className="min-h-screen bg-[#313131] xl:w-4/5 w-full  rounded-3xl ">
			<Header />
			<Modal toggleModal={toggleModal} isOpen={modalIsOpen}/>
			<div className="xl:ml-16 mt-20 ">
				<div className="w-4/5 flex flex-row items-start justify-between ">
					<h1 className="xl:mb-8  xl:text-left text-center">Transactions</h1>
					<div className=""> <button onClick={toggleModal}>Create Transaction</button> </div>
				</div>
				
				<div className="flex flex-col xl:flex-row items-center  ">
					<div className=" rounded-lg xl:w-5/6 p-5 w-5/6  ">
						<div className="flex xl:flex-row flex-col justify-between ">
							<TransactionsBox 
								title="Income" 
								svgColor={"#59f7ed"}
								value={totalIncome}
								currency={"$"}
							/>

							<TransactionsBox 
								title="Outcome" 
								svgColor={"#FF6384"}
								value={totalOutcome}
								currency={"$"}
							/>

							<TransactionsBox 
								title="Total" 
								svgColor={"#FFFFFF"}
								value={total}
								currency={"$"}
								bgColor="bg-green-700"
							/>

						</div>
						<div className="mx-auto w-full mt-12  justify-between hidden xl:flex">
							<TransactionsSearch transactions={transactions} searchCallback={handleCallbackSearch} />
						</div>
						<div className="mt-16">
							<TransactionsTable transactions={transactions} />

						</div>
					</div>
				</div>	
			</div>    
		</section>
	);

}