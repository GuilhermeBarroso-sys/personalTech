import React, { createContext, ReactNode, useMemo, useState } from "react";
export type TCurrency = "$" | "R$"
export type TTransactionType = "income" | "outcome"

export interface ITransactionsInfo {
  totalIncome: number;
  totalOutcome: number;
  total: number;
}
export type TWeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
export interface ITransactions {
  id: string;
  name: string
  value: number
  currency: TCurrency
  category: string
  type: TTransactionType
  weekDay: TWeekDay
  date: string
}

interface ITransactionContext {
  transactions: ITransactions[]
  updateTransactions: (transactions: ITransactions[]) => void;
}
type ITransactionProviderProps = {
  children : ReactNode
}
export const TransactionContext = createContext({} as  ITransactionContext);

export function TransactionProvider({children} : ITransactionProviderProps) {
	const [transactions, setTransactions] = useState<ITransactions[]>([
		{
			id: "1",
			name: "Salary",
			value: 3500.00,
			currency: "$",
			category: "Salary",
			type: "income",
			weekDay: "Thursday",
			date: "01/13/2022"
		},
		{
			id: "2",
			name: "Servers",
			value: 700.00,
			currency: "$",
			category: "Projects",
			type: "outcome",
			weekDay: "Wednesday",
			date: "01/12/2022"
		},
		{
			id: "3",
			name: "Macbook",
			value: 1200.00,
			currency: "$",
			category: "Electronics",
			type: "outcome",
			weekDay: "Monday",
			date: "01/10/2022"
		},
    
	]);
	const updateTransactions = (transactions : ITransactions[]) => setTransactions(transactions);
	const useTransaction =  useMemo(() => ({
		transactions,
		updateTransactions

	}), [transactions]);

	return (
		<TransactionContext.Provider value={useTransaction}>
			{children}
		</TransactionContext.Provider>
	);
}