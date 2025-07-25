import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-blue-500">{email}</p>
      <p>{`${address.street}, ${address.city}`}</p>
    </div>
  );
};

export default UserCard;