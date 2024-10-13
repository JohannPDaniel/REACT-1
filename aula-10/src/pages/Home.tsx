import { useState } from 'react';
import { Container } from '../components/styles/Container';
import { SelectStyle } from '../components/styles/SelectStyle';
import { Table } from '../components/Table';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { ModalCreate } from '../components/ModalCreate';
import { ModalGeneric } from '../components/ModalGeneric';
import { OpenModalButton } from '../components/styles/OpenModalButton';
import { ModalUpdate } from '../components/ModalUpdate';

export interface Transaction {
	id: string;
	type: 'entrada' | 'saida';
	value: number;
	description: string;
	created_at: Date;
}

export const Home = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [isModalCreateOpen, setIsModalCreateOpen] = useState<boolean>(false);
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
	const [selectedTransactionId, setSelectedTransactionId] =
		useState<string>('');
	function handleNewTransaction(newTransaction: Transaction) {
		setTransactions([...transactions, newTransaction]);
	}

	function toggleCreateModal() {
		setIsModalCreateOpen(!isModalCreateOpen);
	}

	function updateModal(id: string) {
		setSelectedTransactionId(id);
		setIsModalUpdateOpen(!isModalUpdateOpen);
	}

	function closeUpdateModal() {
		setIsModalUpdateOpen(!isModalUpdateOpen);
		setSelectedTransactionId('');
	}

	function handleUpdateTransaction(updatedTransaction: Transaction) {
		setTransactions((prevTransactions) =>
			prevTransactions.map((transaction) =>
				transaction.id === updatedTransaction.id
					? updatedTransaction
					: transaction
			)
		);
		closeUpdateModal();
	}
	const findTransaction = transactions.find(
		(transaction) => transaction.id === selectedTransactionId
	);

	return (
		<DefaultLayout>
			<Container
				flexDirection='column'
				gap='50px'>
				<SelectStyle
					name='transaction'
					id='transaction'>
					<option value=''>Selecione um tipo</option>
					<option value='Entrada'>Entrada</option>
					<option value='Saida'>Saída</option>
				</SelectStyle>

				<Table
					updateModal={updateModal}
					transactions={transactions}
				/>
				<OpenModalButton onClick={toggleCreateModal}>+</OpenModalButton>

				<ModalGeneric
					isOpen={isModalCreateOpen}
					onClose={toggleCreateModal}
					onSend={handleNewTransaction}>
					<ModalCreate
						title='Criar Item'
						onSubmit={handleNewTransaction}
						onClose={toggleCreateModal}
					/>
				</ModalGeneric>

				{findTransaction && (
					<ModalGeneric
						isOpen={isModalUpdateOpen}
						onClose={closeUpdateModal}
						onSend={(date) => {
							handleUpdateTransaction(date);
						}}>
						<ModalUpdate
							title='Atualizar item'
							onSubmitUpdate={handleUpdateTransaction}
							onCloseUpdate={closeUpdateModal}
							initialTransaction={findTransaction}
						/>
					</ModalGeneric>
				)}
			</Container>
		</DefaultLayout>
	);
};
