// Simple in-memory database for demo purposes
// In production, you'd want to use a real database like FaunaDB, MongoDB, etc.

let cards = [
  {
    id: '1',
    title: 'Sample Task',
    description: 'This is a sample task',
    status: 'todo',
    createdAt: new Date().toISOString()
  }
];

let nextId = 2;

// Get all cards
const getCards = async () => {
  return cards;
};

// Create a new card
const createCard = async (cardData) => {
  const newCard = {
    id: nextId.toString(),
    ...cardData,
    createdAt: new Date().toISOString()
  };
  
  cards.push(newCard);
  nextId++;
  
  return newCard;
};

// Update a card
const updateCard = async (updatedCard) => {
  const index = cards.findIndex(card => card.id === updatedCard.id);
  
  if (index === -1) {
    throw new Error('Card not found');
  }
  
  cards[index] = {
    ...cards[index],
    ...updatedCard,
    updatedAt: new Date().toISOString()
  };
  
  return cards[index];
};

// Delete a card
const deleteCard = async (cardId) => {
  const index = cards.findIndex(card => card.id === cardId);
  
  if (index === -1) {
    throw new Error('Card not found');
  }
  
  cards.splice(index, 1);
  return true;
};

module.exports = {
  getCards,
  createCard,
  updateCard,
  deleteCard
};