import { ReactNode } from "react";
import { Header } from "../../Header";
import { Spinner } from "../../Spinner";
type CurrencySymbol = "R$" | "$" | "€"
interface ITransactionsBox {
  title: string;
  svgColor: string,
  value: number;
  currency: CurrencySymbol
  bgColor?: string 

}
export function TransactionsBox({title, svgColor, value, currency, bgColor} : ITransactionsBox) {
	
	return (
		
		<div className={`${ bgColor ? bgColor :"bg-[#272A2F]"} w-full sm:2/5 lg:w-2/4  xl:w-1/4 py-8 rounded-lg xl:mx-0 mx-auto xl:my-0 my-3`}>
		
			<div className="flex justify-between items-center px-5 title mb-4 ">
				<h3 className="title">{title}</h3>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" color={svgColor} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-lg ">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<div className="px-5 font-extrabold text-white text-4xl">

				<p>{true ? `${currency} ${value}` : <Spinner /> }</p>
			</div>
			
		</div>
		

	);
}