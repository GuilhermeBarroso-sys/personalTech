import { Dialog } from "@headlessui/react";
import { useState } from "react";
interface ModalProps {
  isOpen: boolean,
  toggleModal: () => void
}
export function Modal({toggleModal,isOpen} : ModalProps) {

	return (
		<Dialog open={isOpen} onClose={() => toggleModal()} className="w-1/2 bg-green-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<Dialog.Panel>
				<Dialog.Title>Deactivate account</Dialog.Title>
				<Dialog.Description>
      This will permanently deactivate your account
				</Dialog.Description>

				<p>
      Are you sure you want to deactivate your account? All of your data
      will be permanently removed. This action cannot be undone.
				</p>

				<button onClick={() => toggleModal()}>Deactivate</button>
				<button onClick={() => toggleModal()}>Cancel</button>
			</Dialog.Panel>
		</Dialog>
	);
}