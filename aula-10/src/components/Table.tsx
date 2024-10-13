import { Transaction } from '../pages/Home';
import { Button } from './styles/Button';
import { TableStyle } from './styles/TableStyle';

interface TableProps {
	transactions: Transaction[];
	updateModal: (id: string) => void;
}

export const Table = ({ transactions, updateModal }: TableProps) => {

	return (
		<TableStyle>
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
				{transactions.map((trans, index) => (
					<tr key={trans.id}>
						<td>{index + 1}</td>
						<td>{trans.type}</td>
						<td>{trans.value.toFixed(2)}</td>
						<td>{trans.description}</td>
						<td>{trans.created_at.toLocaleDateString()}</td>
						<td>
							<Button
								size='small'
								variant='error'
								onClick={() => updateModal(trans.id)}>
								Editar
							</Button>
							<Button size='small'>Deletar</Button>
						</td>
					</tr>
				))}
			</tbody>
		</TableStyle>
	);
};
