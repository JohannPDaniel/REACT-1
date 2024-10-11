import { Button } from "./styles/Button";
import { ModalRoot } from "./styles/ModalRoot";

interface ModalUpdateProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalUpdate = ({ title, isOpen, onClose, children }: ModalUpdateProps) => {
    return (
        <>
            {isOpen && (
                <ModalRoot onClick={onClose}>
                    <div className="container-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{title}</h2>
                        {children}
                        <div className="buttons">
                            <Button
                                size="small"
                                onClick={onClose}
                                variant="error">
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </ModalRoot>
            )}
        </>
    );
};
