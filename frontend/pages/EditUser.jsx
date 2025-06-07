import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    age: '',
    address: '',
    phoneNumber: '',
  });

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        setFormData(response.data.data);
      })
      .catch((error) => {
        console.error('Failed to fetch user data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .put(`/users/${id}`, formData)
      .then(() => {
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Failed to update data:', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="age"
          placeholder="Umur"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Alamat"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Telepon"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
