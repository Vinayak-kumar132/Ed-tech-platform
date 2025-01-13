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
    <div className='relative flex h-[calc(100vh-3.5rem)] bg-richblack-9 overflow-y-hidden'>
      
      
      <Sidebar />

      <div className='h-[calc(100vh-3.5rem)] w-[calc(100vw-240px)] overflow-auto '>

        <div className=' w-full flex flex-grow mx-auto justify-between py-10'>
        {/* dashboard includes all the nested route ,<Outlet /> is a component from React Router that serves as a placeholder for rendering child routes */}
          <Outlet />
        </div>


      </div>

    </div>
  )
}

export default Dashboard