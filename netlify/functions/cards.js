const { getCards, createCard, updateCard, deleteCard } = require('./database');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Check authentication
  const { user } = context.clientContext || {};
  if (!user) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: 'Authentication required' })
    };
  }

  const userId = user.sub;

  try {
    const { httpMethod, body, queryStringParameters } = event;

    switch (httpMethod) {
      case 'GET':
        const cards = await getCards(userId);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ data: cards })
        };

      case 'POST':
        const newCard = JSON.parse(body);
        newCard.userId = userId;
        const createdCard = await createCard(newCard);
        return {
          statusCode: 201,
          headers,
          body: JSON.stringify(createdCard)
        };

      case 'PUT':
        const updatedCard = JSON.parse(body);
        updatedCard.userId = userId;
        const result = await updateCard(updatedCard);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(result)
        };

      case 'DELETE':
        const { id } = queryStringParameters;
        await deleteCard(id, userId);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Card deleted' })
        };

      default:
        return {
          statusCode: 405,
          headers,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};