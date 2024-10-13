import { useState } from 'react';
import { Transaction } from '../pages/Home';
import { Button } from './styles/Button';
import { FormStyle } from './styles/FormStyle';
import { Input } from './styles/Input';
import { SelectStyle } from './styles/SelectStyle';
import { TType } from './ModalCreate';

interface ModalUpdate {
	title: string;
	onSubmitUpdate: (date: Transaction) => void;
	onCloseUpdate: () => void;
	initialTransaction: Transaction;
}

export const ModalUpdate = ({
	title,
	onSubmitUpdate,
	onCloseUpdate,
	initialTransaction,
}: ModalUpdate) => {
	const [type, setType] = useState<TType>(initialTransaction.type);
	const [value, setValue] = useState<string>(initialTransaction.value.toFixed(2));
	const [description, setDescription] = useState<string>(
		initialTransaction.description
	);
	const [dateInput, setDateInput] = useState<string>(
		initialTransaction.created_at
			? new Date(initialTransaction.created_at).toISOString().slice(0, 10) 
			: ''
	);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const [year, month, day] = dateInput.split('-').map(Number);
		const correctedDate = new Date(year, month - 1, day);

		const updatedTransaction: Transaction = {
			...initialTransaction,
			type,
			value: Number(value),
			description,
			created_at: correctedDate,
		};

		onSubmitUpdate(updatedTransaction);
	};
	return (
		<>
			<h2>{title}</h2>
			<FormStyle
				onSubmit={handleSubmit}
				flexDirection='column'
				gap='20px'>
				<SelectStyle
					maxWidth='400px'
					name='transaction'
					value={type}
					onChange={(e) => setType(e.target.value as 'entrada' | 'saida')}
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
					value={value}
					onChange={(e) => setValue(e.target.value)}
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
						onClick={onCloseUpdate}
						size='small'
						variant='error'>
						Cancelar
					</Button>
					<Button
						type='submit'
						size='small'>
						Atualizar
					</Button>
				</div>
			</FormStyle>
		</>
	);
};
