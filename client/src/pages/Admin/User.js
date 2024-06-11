import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import AdminMenu from '../../Layout/AdminMenu';
import axios from 'axios';
import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/v1/auth/users');
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Layout title={'Dashboard - All Users'}>
        <div className='aduser-container' style={{height:"100%",marginTop:"10px"}}>
          <div className='aduserrow'>
            <div className='aduserleft'>
              <AdminMenu />
            </div>
            <div className='aduserright'>
              <div className='user-list'>
                {users.map((user, i) => (
                  <div key={i} className='user-card'>
                    <div className='user-name'>User: {user.name}</div>
                    <div className='user-email'>User Email: {user.email}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default User;
