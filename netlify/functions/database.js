// Simple in-memory database for demo purposes
// In production, you'd want to use a real database like FaunaDB, MongoDB, etc.

let cards = [
  {
    id: '1',
    title: 'Welcome to your kanban board!',
    description: 'Drag cards between columns to organize your work. Click edit to modify details.',
    status: 'todo',
    userId: 'demo',
    label: 'blue',
    createdAt: new Date().toISOString()
  }
];

let nextId = 2;

// Get all cards for a specific user
const getCards = async (userId) => {
  return cards.filter(card => card.userId === userId);
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
  const index = cards.findIndex(card => 
    card.id === updatedCard.id && card.userId === updatedCard.userId
  );
  
  if (index === -1) {
    throw new Error('Card not found or access denied');
  }
  
  cards[index] = {
    ...cards[index],
    ...updatedCard,
    updatedAt: new Date().toISOString()
  };
  
  return cards[index];
};

// Delete a card
const deleteCard = async (cardId, userId) => {
  const index = cards.findIndex(card => 
    card.id === cardId && card.userId === userId
  );
  
  if (index === -1) {
    throw new Error('Card not found or access denied');
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