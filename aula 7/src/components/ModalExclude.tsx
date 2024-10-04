import { Button } from "./styles/Button";
import { ModalRoot } from "./styles/ModalRoot";

interface ModalExcludeProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const ModalExclude = ( { isOpen, onClose, onConfirm }: ModalExcludeProps ) => {
    const handleCancelClick = (event: React.MouseEvent) => {
        event.stopPropagation(); 
        onClose(); 
    };
    return (
        <>
            {isOpen && (
                <ModalRoot onClick={onClose}>
                    <div
                        className="container-modal"
                        onClick={(e) => e.stopPropagation()}>
                        <h2>Deseja realmente excluir esta presença?</h2>
                        <p>Esta alteração não poderá ser desfeita</p>
                        <div className="buttons">
                            <Button
                                size="small"
                                onClick={handleCancelClick}
                                variant="error">
                                Cancelar
                            </Button>
                            <Button
                                size="small"
                                onClick={onConfirm}>
                                Confirmar
                            </Button>
                        </div>
                    </div>
                </ModalRoot>
            )}
        </>
    );
};
