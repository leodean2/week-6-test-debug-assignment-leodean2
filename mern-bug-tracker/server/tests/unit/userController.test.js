const { createUser } = require('../../src/controllers/userController');

describe('User Controller', () => {
  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      const mockUser = {
        name: 'John Doe',
        email: 'john@example.com'
      };
      
      const result = await createUser(mockUser);
      
      expect(result).toHaveProperty('_id');
      expect(result.name).toBe(mockUser.name);
      expect(result.email).toBe(mockUser.email);
    });
    
    it('should throw error with invalid email', async () => {
      const mockUser = {
        name: 'John Doe',
        email: 'invalid-email'
      };
      
      await expect(createUser(mockUser)).rejects.toThrow('Invalid email');
    });
  });
});