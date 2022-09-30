import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Sidebar() {
	const selectedPage = window.location.href.split("/")[3];


	//bg-[#2F343D]
	return (
 
		<aside className="flex-1 h-screen overflow-auto sticky top-0 xl:min-h-screen  xl:w-1/5  bg-[#272A2F]  pb-10 xl:pb-0"> 

			<nav className="sticky top-0 ">
				<div className="flex flex-col">
					<header className="mt-8 mb-12">
						<h1 className={"text-3xl text-center "}>PersonalTech</h1>
					</header>
					<ul className="text-center w-auto mx-auto  ">
					
						<li className="title flex items-center flex-start mx-auto"> 
							
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
								<path d="M2.40002 12C2.40002 9.45392 3.41145 7.01212 5.2118 5.21177C7.01215 3.41142 9.45395 2.39999 12 2.39999V12H21.6C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6C9.45395 21.6 7.01215 20.5886 5.2118 18.7882C3.41145 16.9879 2.40002 14.5461 2.40002 12V12Z" fill="#DFDFDE"/>
								<path d="M14.4 2.70239C16.0604 3.13255 17.5755 3.99893 18.7883 5.21174C20.0011 6.42454 20.8675 7.93964 21.2976 9.59999H14.4V2.70239Z" fill="#DFDFDE"/>
							</svg>
							<Link to = "/dashboard" className={`ml-3 ${selectedPage == "dashboard" && "text-green-500"}`}>Dashboard</Link> 
							
					
						</li>
              
						<li className="title flex items-center  flex-start">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 8V16M12 11V16M8 14V16M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="#DFDFDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>

							<Link to = "/transactions" className={`ml-3 ${selectedPage == "transactions" && "text-green-500"}`}>Transactions</Link> 
						</li>
						<li className="title flex items-center  flex-start"> 
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 10H21M7 15H8M12 15H13M6 19H18C18.7956 19 19.5587 18.6839 20.1213 18.1213C20.6839 17.5587 21 16.7956 21 16V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H6C5.20435 5 4.44129 5.31607 3.87868 5.87868C3.31607 6.44129 3 7.20435 3 8V16C3 16.7956 3.31607 17.5587 3.87868 18.1213C4.44129 18.6839 5.20435 19 6 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>

							<Link to = "" className={`ml-3 ${selectedPage == "wallet" && "text-green-500"}`}>Wallet</Link> 
						</li>
					</ul>
				</div>
			</nav>
			
		</aside>

	); 
}