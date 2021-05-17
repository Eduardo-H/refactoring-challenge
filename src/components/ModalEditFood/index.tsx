import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Food } from '../../types';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FormHandles } from '@unform/core';

interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    editingFood: Food;
    handleUpdateFood: (data: Food) => void;
}

export function ModalEditFood({isOpen, setIsOpen, editingFood, handleUpdateFood}: ModalEditFoodProps) {
    const formRef = createRef<FormHandles>();

    async function handleSubmit(data: Food) {
        handleUpdateFood(data);
        setIsOpen();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
                <h1>Edit Dish</h1>
                <Input name="image" placeholder="Paste the image link here" />

                <Input name="name" placeholder="e.g. Pasta" />
                <Input name="price" placeholder="e.g. 19.90" />

                <Input name="description" placeholder="Description" />

                <button type="submit" data-testid="edit-food-button">
                    <div className="text">Edit Dish</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};
