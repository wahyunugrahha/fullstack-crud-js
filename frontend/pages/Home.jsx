import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error('Gagal ambil data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (isConfirmed) {
      api
        .delete(`/users/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.error('Gagal hapus data:', error);
        });
    }
  };

  return (
    <div>
      <h1>User Management App</h1>
      <div className="text-center">
        {' '}
        {/* Ditambahkan */}
        <Link to="/create" className="btn btn-primary">
          Add New User
        </Link>
      </div>
      <hr />
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td data-label="Name">
                <Link to={`/users/${user.id}`} className="user-link">
                  {user.name}
                </Link>
              </td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Gender">{user.gender}</td>
              <td data-label="Age">{user.age}</td>
              <td data-label="Address">{user.address}</td>
              <td data-label="Phone Number">{user.phoneNumber}</td>
              <td data-label="Created At">
                {new Date(user.createdAt).toLocaleString('id-ID', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </td>
              <td data-label="Updated At">
                {new Date(user.updatedAt).toLocaleString('id-ID', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </td>
              <td className="actions">
                <Link to={`/edit/${user.id}`} className="btn btn-edit">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
