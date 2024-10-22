import { Button } from './styles/Button';

interface ModalExcludeProps {
	title: string;
    onClose: () => void;
    onConfirm: () => void;
}

export const ModalExclude = ({
	title,
	onClose,
	onConfirm,
}: ModalExcludeProps) => {
	return (
		<>
			<h3>{title}</h3>
			<small>Esta ação não poderá ser revertida !!!</small>
			<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<Button
					variant='error'
					size='small'
					onClick={onClose}>
					cancelar
				</Button>
				<Button
					size='small'
					onClick={onConfirm}>
					Excluir
				</Button>
			</div>
		</>
	);
};
