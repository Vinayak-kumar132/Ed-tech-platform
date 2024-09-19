import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom"
import Spinner from "../components/common/Spinner"
import Sidebar from '../components/core/Dashboard/Sidebar'


const Dashboard = () => {

  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (authLoading || profileLoading) {
    return (
      <Spinner/>
    )
  }

  return (
    <div className='relative flex h-[calc(100vh-3.5rem)] bg-richblack-9 00 '>
      
      
      <Sidebar />

      <div className='h-[calc(100vh-3.5rem)] overflow-auto no-scrollbar'>

        <div className='mx-auto w-11/12 ml-[100px] max-w-[1000px] py-10'>
        {/* dashboard includes all the nested route ,<Outlet /> is a component from React Router that serves as a placeholder for rendering child routes */}
          <Outlet />
        </div>


      </div>

    </div>
  )
}

export default Dashboard