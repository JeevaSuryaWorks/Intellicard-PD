// LocalStorage utility functions for user management and card data

const USERS_KEY = 'visiting_card_users';
const CURRENT_USER_KEY = 'visiting_card_current_user';
const CARD_DATA_KEY = 'visiting_card_data';

// User Management
export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  
  // Check if email already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('Email already registered');
  }
  
  const newUser = {
    id: Date.now().toString(),
    name: userData.name,
    email: userData.email,
    mobile: userData.mobile,
    password: userData.password, // In production, this should be hashed
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  return newUser;
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  // Store current user (without password)
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
  
  return userWithoutPassword;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const deleteAccount = (userId) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const updatedUsers = users.filter(user => user.id !== userId);
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  
  // Clear current user and card data
  localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem(`${CARD_DATA_KEY}_${userId}`);
};

// Card Data Management
export const saveCardData = (userId, cardData) => {
  const key = `${CARD_DATA_KEY}_${userId}`;
  localStorage.setItem(key, JSON.stringify(cardData));
};

export const getCardData = (userId) => {
  const key = `${CARD_DATA_KEY}_${userId}`;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const updateCardTemplate = (userId, templateId) => {
  const cardData = getCardData(userId);
  if (cardData) {
    cardData.selectedTemplate = templateId;
    saveCardData(userId, cardData);
  }
};
