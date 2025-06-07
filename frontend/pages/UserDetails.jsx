import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error('Failed to fetch user details:', error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-card-wrapper">
      <h1>User Details</h1>
      <div className="user-card">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Phone:</strong> {user.phoneNumber}
        </p>
        <p>
          <strong>Created At:</strong>{' '}
          {new Date(user.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{' '}
          {new Date(user.updatedAt).toLocaleString()}
        </p>
      </div>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
}

export default UserDetails;
