import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Transaction } from '../pages/Home';
import { Button } from './styles/Button';
import { FormStyle } from './styles/FormStyle';
import { Input } from './styles/Input';
import { SelectStyle } from './styles/SelectStyle';

export type TType = 'entrada' | 'saida';

interface FormProps {
	title: string;
	date?: Date;
	onClose: () => void;
	onSubmit: (data: Transaction) => void;
}

export const ModalCreate = ({ title, date, onClose, onSubmit }: FormProps) => {
	const [transactionType, setTransactionType] = useState<TType>('entrada');
	const [money, setMoney] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [dateInput, setDateInput] = useState<string>(
		date ? date.toISOString().slice(0, 16) : ''
	);

	function submitModal(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const newTransaction: Transaction = {
			id: uuid(),
			type: transactionType,
			value: parseFloat(money),
			description,
			created_at: new Date(dateInput),
		};

		onSubmit(newTransaction);

		onClose();
	}

	return (
		<>
			<h2>{title}</h2>
			<FormStyle
				onSubmit={submitModal}
				flexDirection='column'
				gap='20px'>
				<SelectStyle
					maxWidth='400px'
					name='transaction'
					value={transactionType}
					onChange={(e) =>
						setTransactionType(e.target.value as 'entrada' | 'saida')
					}
					id='transaction'>
					<option
						value=''
						disabled>
						Selecione um tipo
					</option>
					<option value='entrada'>Entrada</option>
					<option value='saida'>Saída</option>
				</SelectStyle>

				<Input
					type='number'
					step={0.01}
					name='money'
					value={money}
					onChange={(e) => setMoney(e.target.value)}
					placeholder='0.00'
					required
				/>
				<Input
					type='text'
					name='description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Descrição'
					required
				/>
				<Input
					type='date'
					name='Date'
					value={dateInput}
					onChange={(e) => setDateInput(e.target.value)}
					required
				/>
				<div className='buttons'>
					<Button
						onClick={onClose}
						size='small'
						variant='error'>
						Cancelar
					</Button>
					<Button
						type='submit'
						size='small'>
						Adicionar
					</Button>
				</div>
			</FormStyle>
		</>
	);
};
