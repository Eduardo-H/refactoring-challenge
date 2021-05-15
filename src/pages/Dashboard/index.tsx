import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import api from '../../services/api';
import { FoodCard } from '../../components/FoodCard';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { Food } from '../../types';

export function Dashboard() {
    const [foods, setFoods] = useState<Food[]>([]);
    const [editingFood, setEditingFood] = useState<Food>({} as Food);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        api.get('/foods')
            .then(response => setFoods(response.data));
    }, []);

    async function handleAddFood (food: Food) {
        const updatedFood = [...foods];

        try {
            const response = await api.post('/foods', {
                ...food,
                available: true,
            });
            updatedFood.push(response.data);

            setFoods(updatedFood);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdateFood (food: Food) {
        try {
            const foodUpdated = await api.put(
                `/foods/${editingFood.id}`,
                { ...editingFood, ...food },
            );

            const foodsUpdated = foods.map(food =>
                food.id !== foodUpdated.data.id ? food : foodUpdated.data
            );

            setFoods(foodsUpdated);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleDeleteFood (id: Number) {
        const updatedFoods = [...foods];

        await api.delete(`/foods/${id}`);

        const foodsFiltered = updatedFoods.filter(food => food.id !== id);

        setFoods(foodsFiltered);
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal() {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditFood (food: Food) {
        setEditingFood(food);
        setEditModalOpen(true);
    }

    return (
        <>
            <Header openModal={toggleModal} />
            <ModalAddFood
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddFood={handleAddFood}
            />
            <ModalEditFood
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingFood={editingFood}
                handleUpdateFood={handleUpdateFood}
            />

            <FoodsContainer data-testid="foods-list">
                {foods &&
                    foods.map(food => (
                        <FoodCard
                            key={food.id}
                            food={food}
                            handleDelete={handleDeleteFood}
                            handleEditFood={handleEditFood}
                        />
                    )
                )}
            </FoodsContainer>
        </>
    );
};
