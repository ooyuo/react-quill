import React, { useEffect, useState } from 'react';
import { User, getUser } from '../model/userApi';
import { Product, getProduct } from '@/model/producApi';

interface UserProfileProps {
  userId: number;
  blaBlaId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [blaBlaData, setBlaBlaData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchBlaBlaData = async () => {
      try {
        const data = await getProduct(userId);
        setBlaBlaData(data);
      } catch (error) {
        console.error('Error fetching BlaBla data:', error);
      }
    };

    fetchUser();
    fetchBlaBlaData();
  }, [userId]);

  if (!user || !blaBlaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>BlaBla Data</h2>
      <p>{blaBlaData.name}</p>
    </div>
  );
};

export default UserProfile;
