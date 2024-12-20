import { useEffect, useState } from "react";
import { generateId } from "../config/types/generateID";
import { Transaction } from "../config/types/Transaction";
import { Select } from "./Select";
import { Button } from "./styles/Button";
import { FormStyle } from "./styles/FormStyle";
import { Input } from "./styles/Input";

interface ModalUpdate {
  title: string;
  onClose: () => void;
  updated?: Transaction;
  onSave?: (trans: Transaction) => void;
  onEdit?: (trans: Transaction) => void;
}

const emptyTransaction: Transaction = {
  id: "",
  type: "",
  description: "",
  value: 0,
  createdAt: new Date(),
};

export const ModalUpdate = ({
  title,
  onClose,
  updated,
  onSave,
  onEdit,
}: ModalUpdate) => {
  const [transaction, setTransaction] = useState<Transaction>(emptyTransaction);

  useEffect(() => {
    if (updated) {
      setTransaction(updated);
    } else {
      setTransaction(emptyTransaction);
    }
  }, [updated]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const tipo = e.currentTarget.type.value;
    const valor = e.currentTarget.value.value;
    const descricao = e.currentTarget.description.value;

    const valorNumber = Number(valor);

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
    } else {
      const objectTransaction: Transaction = {
        ...transaction,
        type: tipo,
        description: descricao,
        value: valorNumber,
      };
      if (onEdit) onEdit(objectTransaction);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: name === "value" ? Number(value) : value,
    }));
  };
  return (
    <>
      <h2>{title}</h2>
      <FormStyle onSubmit={handleSubmit} flexDirection="column" gap="20px">
        <Select
          maxWidth="400px"
          name="type"
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
            Atualizar
          </Button>
        </div>
      </FormStyle>
    </>
  );
};
