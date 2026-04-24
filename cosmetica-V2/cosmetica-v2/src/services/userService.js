// src/services/userService.js

const BASE_URL = 'https://localhost:8000.com'; // Replace with your API URL

export const userService = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  // Get a single user by ID
  getUserById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }
};
