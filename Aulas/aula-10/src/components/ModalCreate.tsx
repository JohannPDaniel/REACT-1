import { useState } from "react";
import { Button } from "./styles/Button";
import { FormStyle } from "./styles/FormStyle";
import { Input } from "./styles/Input";
import { Transaction } from "../config/types/Transaction";
import { generateId } from "../config/types/generateID";
import { Select } from "./Select";

interface FormProps {
  title: string;
  onClose: () => void;
  onSave: (trans: Transaction) => void;
}

const emptyTransaction: Transaction = {
  id: "",
  type: "",
  description: "",
  value: 0,
  createdAt: new Date(),
};

export const ModalCreate = ({ title, onClose, onSave }: FormProps) => {
  const [transaction, setTransaction] = useState<Transaction>(emptyTransaction);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const tipo = e.currentTarget.type.value;
    const valor = e.currentTarget.value.value;
    const descricao = e.currentTarget.description.value;

    if (!tipo || !valor || !descricao) {
      return;
    }

    if (onSave) {
      const objectTransactions: Transaction = {
        id: generateId(),
        type: tipo,
        description: descricao,
        value: Number(valor),
        createdAt: new Date(),
      };
      onSave(objectTransactions);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    console.log(name, value);

    // Pegando todo evento de input, select estamos pro state
    // E altera ele de uma vez, ou altera mantendo o estado anterior
    setTransaction((prevState) => ({
      ...prevState,
      [name]: name === "value" ? Number(value) : value,
    }));

    console.log(transaction);
  };

  return (
    <>
      <h2>{title}</h2>
      <FormStyle onSubmit={handleSubmit} flexDirection="column" gap="20px">
        <Select
          name="type"
          maxWidth="400px"
          value={transaction?.type || ""}
          onChange={handleChange}
        />

        <Input
          type="number"
          step={0.01}
          name="value"
          value={transaction?.value || ""}
          onChange={handleChange}
          placeholder="0.00"
          required
        />

        <Input
          type="text"
          name="description"
          value={transaction?.description || ""}
          onChange={handleChange}
          placeholder="Descrição"
          required
        />

        <div>
          <Button onClick={onClose} size="small" variant="error">
            Cancelar
          </Button>
          <Button type="submit" size="small">
            Adicionar
          </Button>
        </div>
      </FormStyle>
    </>
  );
};
