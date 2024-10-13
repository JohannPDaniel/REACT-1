import { Transaction } from '../pages/Home';
import { ModalRoot } from './styles/ModalRoot';

interface ModalGenericProps {
	isOpen: boolean;
	onClose: () => void;
	onSend?: (data: Transaction) => void;
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
					width={ width }
					height={height}
					onClick={onClose}>
					<div onClick={(e) => e.stopPropagation()}>{children}</div>
				</ModalRoot>
			)}
		</>
	);
};
