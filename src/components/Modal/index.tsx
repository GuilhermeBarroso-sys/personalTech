import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";
interface ModalProps {
  isOpen: boolean,
  closeModal: () => void
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
}
export function Modal({ isOpen, closeModal, children, title = "modal", description} : ModalProps) {

	return (
		<>
    
			
			<Dialog  open={isOpen} onClose={closeModal} className="transition-all duration-1000 w-5/6 bg-zinc-700 rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="flex w-100 pr-5 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-white mt-2 hover:text-gray-200" onClick={closeModal}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<Dialog.Panel>
					<Dialog.Title className={"text-center font-bold"}>{title}</Dialog.Title>
					<Dialog.Description>
						{description}
					</Dialog.Description>
					{children}
				</Dialog.Panel>
			</Dialog>
		</>
	);
}