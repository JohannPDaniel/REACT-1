import { useEffect, useMemo, useState } from 'react';
import { Container } from '../components/styles/Container';
import { Table } from '../components/Table';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { ModalCreate } from '../components/ModalCreate';
import { ModalGeneric } from '../components/ModalGeneric';
import { OpenModalButton } from '../components/styles/OpenModalButton';
import { ModalUpdate } from '../components/ModalUpdate';
import { ModalExclude } from '../components/ModalExclude';
import { Transaction } from '../config/types/Transaction';
import { Toast } from '../config/types/Toast';
import { ToastResposta } from '../config/hooks/ToastResposta';
import { Select } from '../components/Select';
import { Box } from '../components/styles/Box';
import { BalanceDisplay } from '../components/BalanceDisplay';

const emptyToast: Toast = {
	type: 'success',
	duration: 3000,
	message: '',
};

export const Home = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	// Estado que controla a abertura do modal de cadastro e edição
	const [openModal, setOpenModal] = useState(false);

	// Estado que controla a mensagem, duração e o tipo do alerta
	const [toastProps, setToastProps] = useState<Toast>(emptyToast);
	// Estado que mostra sim ou não o alerta
	const [showToast, setShowToast] = useState(false);

	// Esse estado controla o nosso valor do filter select (entrada|saida|"")
	const [selected, setSelected] = useState<string>('');
	// Responsavel por armazenar nossa lista filtrada.
	const [transactionsFiltered, setTransactionsFiltered] = useState<
		Transaction[]
	>([]);

	// Abre o modal para atualizar
	const [updateModal, setUpdateModal] = useState(false);

	//Estado para armazenar os valores do update que no nosso caso será um objeto
	const [updated, setUpdated] = useState<Transaction>();

	//Estado para armazenar o id do valor que vai ser deletado
	const [transId, setTransId] = useState<string>('');

	//Estado para abrir e fechar o modal de delete
	const [openDelete, setOpenDelete] = useState(false);

	const handleCloseToast = () => {
		setShowToast(false);
	};

	function handleModal() {
		setOpenModal(!openModal);
	}

	const handleCloseUpdate = () => {
		setUpdateModal(false);
		setUpdated(undefined);
	};

	// ADICIONAR/CRIAÇÃO DE TRANSAÇÃO
	const handleAdd = (trans: Transaction) => {
		setTransactions((prevState) => [...prevState, trans]); // Um hook do react

		setToastProps({
			message: 'Transação criada com sucesso',
			duration: 3000,
			type: 'success',
		});

		setShowToast(!showToast);
		handleModal();
	};

	const saldo = useMemo(() => {
		return transactions.reduce((acc, transaction) => {
			if (transaction.type === 'entrada') {
				return acc + transaction.value;
			} else {
				return acc - transaction.value;
			}
		}, 0);
	}, [transactions]);

	useEffect(() => {
		// console.log("VALOR SELECIONADO =>", selected);

		// se o meu selected for diferente de "" = entrada ou saida
		if (selected) {
			const listFiltrada = transactions.filter(
				(trans) => trans.type === selected
			);
			setTransactionsFiltered(listFiltrada);
			return;
		}

		setTransactionsFiltered(transactions);
	}, [selected, transactions]);

	const saldoFiltered = useMemo(() => {
		if (!selected) {
			return undefined;
		}

		return transactionsFiltered.reduce((acc, transaction) => {
			if (transaction.type === 'entrada') {
				return acc + transaction.value;
			} else {
				return acc - transaction.value;
			}
		}, 0);
	}, [transactionsFiltered, selected]);

	const handleDelete = (id: string) => {
		setTransId(id);
		setOpenDelete(!openDelete);
	};

	// Fecha o modal de delete e limpa o id
	const handleCloseDelete = () => {
		setOpenDelete(false);
		setTransId('');
	};

	// Confirmar a exclusão do item selecionado, onde o id esta armazenado no estado transId
	const handleConfirm = () => {
		const index = transactions.findIndex((t) => t.id === transId);

		if (index === -1) {
			setToastProps({
				message: 'Transação não encontrada',
				duration: 3000,
				type: 'error',
			});
			setShowToast(true);
		}

		setTransactions((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);

		setToastProps({
			message: 'Transação excluida com sucesso',
			duration: 3000,
			type: 'success',
		});

		setShowToast(true);
		setOpenDelete(!openDelete);
		setTransId('');
	};

	//Abre o modal de Update

	const handleModalUpdate = (id: string) => {
		const objeto = transactions.find((t) => t.id === id);

		setUpdated(objeto);
		setUpdateModal(!updateModal);
	};

	//Enviar o objeto que esta dentro do modal para atualizar no estado transactions
	const handleUpdate = (trans: Transaction) => {
		setTransactions((prevState) =>
			prevState.map((t) => (t.id === trans.id ? trans : t))
		);

		setToastProps({
			message: 'Transação atualizada com sucesso',
			duration: 3000,
			type: 'success',
		});

		setShowToast(true);
		handleCloseUpdate();
	};

	return (
		<DefaultLayout>
			<Container
				flexDirection='column'
				gap='50px'>
				<Box>
					<BalanceDisplay
						saldo={saldo}
						saldoFiltered={saldoFiltered}
					/>

					<Select
						name='type'
						value={selected}
						onChange={(e) => setSelected(e.target.value)}
					/>
				</Box>

				<Table
					transactions={transactions}
					onDelete={handleDelete}
					onUpdate={handleModalUpdate}
				/>
			</Container>
			<OpenModalButton onClick={handleModal}>+</OpenModalButton>

			<ModalGeneric
				height='350px'
				isOpen={openModal}
				onClose={handleModal}>
				<ModalCreate
					title='Criar Item'
					onClose={handleModal}
					onSave={handleAdd}
				/>
			</ModalGeneric>

			<ModalGeneric
				height='350px'
				isOpen={updateModal}
				onClose={handleCloseUpdate}>
				<ModalUpdate
					updated={updated}
					title='Atualizar item'
					onEdit={handleUpdate}
					onClose={handleCloseUpdate}
				/>
			</ModalGeneric>

			<ModalGeneric
				height='150px'
				width='300px'
				isOpen={openDelete}
				onClose={handleCloseDelete}>
				<ModalExclude
					title='Deseja realmente excluir esta transação?'
					onClose={handleCloseDelete}
					onConfirm={handleConfirm}
				/>
			</ModalGeneric>

			{showToast && (
				<ToastResposta
					message={toastProps.message}
					duration={toastProps.duration}
					type={toastProps.type}
					onClose={handleCloseToast}
				/>
			)}
		</DefaultLayout>
	);
};
