import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";
export function CreateTransaction() {
	const { register, handleSubmit, watch, formState: { errors } , getValues} = useForm();
	const transactionType = watch("transactionType");
	const transactionCurrency = watch("transactionCurrency");
	console.log(transactionCurrency);
	function onSubmit(data : FieldValues) {
		console.log(data);
		Swal.fire("Success", "Transaction created!", "success");
	}
	return (
		<form className="w-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>

			<div className="flex w-1/2 flex-col mb-4">
				<label htmlFor="transactionName"  className="font-semibold text-white text-xl  mb-2">
        Transaction Name
				</label>
				<input placeholder="servers" className="transition-all  rounded-md border-none pl-2 py-1 outline-none bg-[#DFDFDE] mb-2" {...register("transactionName", {required: true})} />
			</div> 
			<div className="flex w-1/2 flex-col mb-4">
				<label htmlFor="transactionName" className="font-semibold text-white text-xl  mb-2">
        Transaction Category
				</label>
				<input placeholder="Projects" className="transition-all  rounded-md border-none pl-2 py-1 outline-none bg-[#DFDFDE] mb-2" {...register("transactionName", {required: true})} />
			</div> 
			<div className="flex w-1/2 flex-col mb-4">
				<label htmlFor="transactionType" className="font-semibold text-white text-xl  mb-2">
        Transaction type
				</label>
				<select defaultValue={"outcome"} className="transition-all w-1/3  rounded-md border-none pl-2 py-1 outline-none bg-[#DFDFDE] " {...register("transactionType", {required: true})}>
					<option value="outcome">Outcome</option> 
					<option value="income" >Income</option>
				</select>
			</div>  
			<div className="flex w-1/2  flex-col mb-4">
				<label htmlFor="transactionCurrency" className="font-semibold text-white text-xl  mb-2">
        Transaction Currency
				</label>
				<select defaultValue={"USD"} className="transition-all w-1/3  rounded-md border-none pl-2 py-1 outline-none bg-[#DFDFDE] " {...register("transactionCurrency", {required: true})}>
					<option value="USD" >$</option>
					<option value="BRL">R$</option>
				</select>
			</div>  

			<div className="flex w-1/2 flex-col mb-4">
				<label htmlFor="transactionValue" className="font-semibold text-white text-xl  mb-2">
        Value
				</label>
				<div className="flex flex-row justify-start ">

					<span className={` text-center w-1/12  border-none  py-1  outline-none bg-[#DFDFDE] mb-2 ${transactionType == "income" ? "text-green-500" :"text-red-500"}`}>{transactionCurrency == "BRL" ? "R$" : "$" }</span>
					<input className={`transition-all  w-1/4 rounded-md rounded-l-none border-none pl-2  py-1 outline-none bg-[#DFDFDE] mb-2 ${transactionType == "income" ? "text-green-500" :"text-red-500"}`} {...register("transactionValue", {required: true})} />
				</div>
			</div> 
			<div className="flex w-1/2 flex-col mb-4">
				<label htmlFor="transactionDate"  className="font-semibold text-white text-xl  mb-2">
        Transaction Date
				</label>
				<InputMask mask={"99/99/9999"}  placeholder="MM/DD/YYYY" className="transition-all  rounded-md border-none pl-2 py-1 outline-none bg-[#DFDFDE] mb-2" {...register("transactionDate", {required: true})} />
				
			</div> 
			<div className="flex w-1/2 flex-col mt-2 ">

				<button type="submit" className="bg-[#DFDFDE] w-1/3 border-none outline-none rounded-md"> Create </button>
			</div>
		</form>
	);
}