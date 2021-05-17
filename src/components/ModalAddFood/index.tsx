import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Food } from '../../types';
import { FormHandles } from '@unform/core';

interface ModalAddFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (data: Food) => void;
}

export function ModalAddFood({isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps) {
    const formRef = createRef<FormHandles>();

    async function handleSubmit(data: Food) {
        handleAddFood(data);
        setIsOpen();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>New Dish</h1>
                <Input name="image" placeholder="Paste the image link here" />

                <Input name="name" placeholder="e.g. Pasta" />
                <Input name="price" placeholder="e.g. 19.90" />

                <Input name="description" placeholder="Description" />
                <button type="submit" data-testid="add-food-button">
                    <p className="text">Save Dish</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};
