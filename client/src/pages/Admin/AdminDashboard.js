import React from 'react'
import Layout from './../../Layout/Layout';
import AdminMenu from '../../Layout/AdminMenu';
import { useAuth } from '../../components/context/auth';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const {auth} = useAuth();
  return (
    <div>
      <Layout title={"Admin Dashboard - Ecommerce App"}>
        <div className='admin-container'>
          <div className="Arow" >
         
            <div
              className="Aleft"
            >
              <AdminMenu />
            </div>
            <div
              className="Aright "style={{marginTop:"39%"}} 
            >
              <div style={{position:"absolute",marginTop:"-600px"}}>
              <h1>Admin Name : {auth?.user?.name}</h1>
              <h1>Admin Email : {auth?.user?.email}</h1>
              <h1>Admin Contact : {auth?.user?.phone}</h1>
              </div>
            </div>
          </div>
        </div>
        
      </Layout>
    </div>
  );
}

export default AdminDashboard