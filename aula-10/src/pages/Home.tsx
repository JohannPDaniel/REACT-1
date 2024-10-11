import { useState } from 'react';
import { Container } from '../components/styles/Container';
import { Select } from '../components/styles/Select';
import { Table } from '../components/styles/Table';
import { DefaultLayout } from '../config/layout/DefaultLayout';
import { v4 as uuid } from 'uuid';
import { Button } from '../components/styles/Button';

interface Transaction {
	id: string;
	type: 'entrada' | 'saída';
	value: number;
	description: string;
	create_at: Date;
}

export const Home = () => {
	const [transactions, setTransaction] = useState<Transaction[]>([
		{
			id: uuid(),
			type: 'entrada',
			value: 1600,
			description: 'Salário',
			create_at: new Date(),
		},
	]);
	return (
		<DefaultLayout>
			<Container
				flexDirection='column'
				gap='50px'>
				<Select
					name='transaction'
					id='transaction'>
					<option value=''>Selecione um tipo</option>
					<option value='Entrada'>Entrada</option>
					<option value='Saida'>Saída</option>
				</Select>
				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Tipo</th>
							<th>Valor</th>
							<th>Descrição</th>
							<th>Data de Criação</th>
							<th>Ação</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{transactions.map((trans, index) => (
								<>
									<td>{index + 1}</td>
									<td>{trans.type}</td>
									<td>{trans.value.toFixed(2)}</td>
									<td>{trans.description}</td>
									<td>{trans.create_at.toLocaleDateString()}</td>
									<td>
										<Button
											size='small'
											variant='error'>
											Editar
										</Button>
										<Button size='small'>Deletar</Button>
									</td>
								</>
							))}
						</tr>
					</tbody>
				</Table>
			</Container>
		</DefaultLayout>
	);
};
