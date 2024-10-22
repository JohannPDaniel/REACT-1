import { Transaction } from "../config/types/Transaction";
import { ModalRoot } from './styles/ModalRoot';

interface ModalGenericProps {
	isOpen: boolean;
	onClose: () => void;
	onSave?: (trans: Transaction) => void;
	children: React.ReactNode;
	width?: string;
	height?: string;
}

export const ModalGeneric = ({
	isOpen,
	onClose,
	children,
	width,
	height,
}: ModalGenericProps) => {
	return (
		<>
			{isOpen && (
				<ModalRoot
					width={width}
					height={height}
					onClick={onClose}>
					<div onClick={(e) => e.stopPropagation()}>{children}</div>
				</ModalRoot>
			)}
		</>
	);
};
