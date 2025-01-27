import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { useLocation, matchPath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoCartOutline, IoChevronDownSharp } from "react-icons/io5";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
// import {courseEndpoints } from '../../Services/apis'
import { categories } from "../../Services/apis"
import { apiConnector } from '../../Services/apiConnector'
import { ACCOUNT_TYPE } from "../../utils/constants"


const Navbar = () => {

  // fetch this from store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)

      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }


  return (
    <div className='  w-full  flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  z-10 bg-richblack-800'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

        <Link to="/">
          <img src={logo} width={160} height={42} loading="lazy" alt="StudyNotionImage" />
        </Link>

        {/* nav links */}
        <nav>
          <ul className='flex gap-x-6 text-richblack-25 select-none'>
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  {
                    link.title === "Catalog" ? (
                      <div
                        className={`group relative flex cursor-pointer items-center gap-2 ${matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25"
                          }`}
                      >
                        <p>{link.title}</p>
                        <IoChevronDownSharp />
                        {/* Dropdown container */}
                        <div
                          className="invisible absolute left-[50%] top-full z-[100] flex w-[300px] translate-x-[-50%] translate-y-2 flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-4 group-hover:opacity-100"
                        >
                          {/* Arrow */}
                          <div className="absolute left-[50%] top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-richblack-5"></div>
                          {/* Content */}
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : subLinks.length ? (
                            subLinks.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                key={i}
                                className="mt-1 rounded-md bg-richblack-25 py-2 text-center font-bold text-richblack-900 hover:bg-richblack-50"
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                          ) : (
                            <p className="text-center">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link to={link?.path}>
                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                          {link.title}
                        </p>
                      </Link>


                    )
                  }

                </li>
              ))
            }

          </ul>
        </nav>


        {/* login/signup /dashboard*/}
        <div className='flex gap-x-4 items-center'>
          {
            user && user?.accountType !== "Instructor" && (
              //you should define frequently used string values or configuration settings in a separate file. like (constant.js) and then use not hardcode the magic string.

              // do styling
              <Link to="dashboard/cart" className='relative text-richblack-100 text-xl'>
                <div className='relative '>
                  
                  <IoCartOutline size={28}/>
                  
                  
                  {
                    totalItems > 0 &&
                    <span
                      className='absolute flex items-center justify-center top-[-4px] right-[-4px] text-xs font-bold bg-caribbeangreen-25  text-richblack-700 h-4 w-4 rounded-full'>
                      {totalItems}
                    </span>

                  }
                </div>
              </Link>
            )
          }

          {
            token === null && (
              <Link to="/login">
                <button className='text-richblack-100 bg-richblack-800 px-4 py-[5px] rounded-lg border-1 hover:text-white border border-richblack-700'>
                  login
                </button>
              </Link>
            )

          }

          {
            token === null && (
              <Link to="/signup">
                <button className='text-richblack-100 bg-richblack-800 px-4 py-[5px] rounded-lg border-1 hover:text-white border border-richblack-700'>
                  signup
                </button>
              </Link>
            )

          }

          {
            token !== null && <ProfileDropDown />



          }




        </div>



      </div>
    </div >
  )
}

export default Navbar


//<NavLink
// to={link?.path} exact
// end
// style={({ isActive }) => ({
//   color: isActive ? "red" : "inherit"
// })}
// >
// <p>
//   {link.title}
// </p>
// </NavLink>