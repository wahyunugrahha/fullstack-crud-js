import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    age: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post('/users', formData)
      .then(() => {
        navigate('/'); // kembali ke halaman utama
      })
      .catch((error) => {
        console.error('Gagal tambah data:', error);
      });
  };

  return (
    <div>
      <h1>Tambah User Baru</h1>
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
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
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
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Telepon"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default CreateUser;
