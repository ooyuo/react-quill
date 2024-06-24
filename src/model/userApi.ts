import axiosInstance from '../api/axiosInstance';

export interface User {
  id: number;
  name: string;
  email: string;
  // 다른 필드들
}

export const getUser = async (userId: number): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};

export const createUser = async (userData: Partial<User>): Promise<User> => {
  try {
    const response = await axiosInstance.post<User>('/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
};
