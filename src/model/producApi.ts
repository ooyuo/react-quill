import axiosInstance from '../api/axiosInstance';

export interface Product {
  id: number;
  name: string;
  price: number;
  // 다른 필드들
}

export const getProduct = async (productId: number): Promise<Product> => {
  try {
    const response = await axiosInstance.get<Product>(
      `/api2/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

export const createProduct = async (
  productData: Partial<Product>
): Promise<Product> => {
  try {
    const response = await axiosInstance.post<Product>(
      '/api2/products',
      productData
    );
    return response.data;
  } catch (error) {
    console.error('Failed to create product:', error);
    throw error;
  }
};
