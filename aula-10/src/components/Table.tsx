import { Transaction } from '../config/types/Transaction';
import { Button } from './styles/Button';
import { TableStyle } from './styles/TableStyle';

interface TableProps {
	transactions: Transaction[];
	onDelete: (id: string) => void;
	onUpdate: (id: string) => void;
}

export const Table = ({ transactions, onDelete, onUpdate }: TableProps) => {
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
						<td>{trans.createdAt.toLocaleDateString()}</td>
						<td>
							<Button
								size='small'
								variant='error'
								onClick={() => onUpdate(trans.id)}>
								Editar
							</Button>
							<Button
								size='small'
								onClick={() => onDelete(trans.id)}>
								Deletar
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</TableStyle>
	);
};
