
import { ITransactions } from "../../../context/transactionContext";
import "./style.scss";
interface ITransactionsTableProps {
  transactions: ITransactions[]
}
export function TransactionsTable({transactions } : ITransactionsTableProps) {
  
	return (
		<>
			{

				transactions.length 
					? <div  className="overflow-x-auto"> 
						<table>
							<thead>
								<tr>
									<th>Title</th>
									<th>Value</th>
									<th>Category</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody className="tableBody">
								{
									transactions.map(({id, name,category,currency,date,type,value}) => {
										return (
											<tr key = {id}>
												<td>{name}</td>
												<td className={`${type == "income" ? "income": "outcome"}`}>{currency}{value}</td>
												<td>{category}</td>
												<td>{date}</td>
											</tr>
										);
									})
								}
							</tbody>
						</table>
					</div>
					: <h3 className="text-center"> No Record Found! Type <span className="text-green-500 font-bold cursor-pointer">  here </span> or <br/> click on the button in the right corner to add a new transaction</h3>
			}
		</>
	);
}