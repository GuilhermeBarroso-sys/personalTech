import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import "./index.css";
import "./settings.css";
import { Dashboard } from "./pages/Dashboard";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./context/transactionContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<TransactionProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard"  element ={<Dashboard/>}/>
				<Route path="/transactions"  element ={<Transactions/>}/>

    
			</Routes>
		</BrowserRouter>
	</TransactionProvider>
);
