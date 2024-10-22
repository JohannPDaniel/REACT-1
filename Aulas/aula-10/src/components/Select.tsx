import { SelectStyle } from "./styles/SelectStyle";

interface SelectModalProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	name?: string;
	requerid?: boolean;
	maxWidth?: string;
	disabledFirtsOption?: boolean;
}


export const Select = ({
	value,
	onChange,
	name,
	requerid,
	maxWidth,
	disabledFirtsOption
}: SelectModalProps) => {
	return (
		<SelectStyle
			maxWidth={maxWidth}
			name={name}
			value={value}
			onChange={onChange}
			required={requerid}>
			<option
				value=''
				selected
				disabled={disabledFirtsOption ?? true}>
				Selecione um tipo
			</option>
			<option value='entrada'>Entrada</option>
			<option value='saida'>Saída</option>
		</SelectStyle>
	);
};