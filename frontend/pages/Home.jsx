import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  return (
    <div>
      <h1>Selamat Datang di Aplikasi User Management</h1>
      <Link to="/create">Tambah User Baru</Link>
      <hr />
      <h1>Daftar User</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Umur</th>
            <th>Alamat</th>
            <th>Telepon</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
