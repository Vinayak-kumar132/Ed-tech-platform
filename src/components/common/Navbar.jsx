import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { useLocation, matchPath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoCartOutline, IoChevronDownSharp } from "react-icons/io5";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import {courseEndpoints } from '../../Services/apis'
import { apiConnector } from '../../Services/apiConnector'


const Navbar = () => {

  // fetch this from store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }
  // const subLinks = [
  //   {
  //     title: "Python",
  //     link: "catalog/python"
  //   },
  //   {
  //     title: "Web-Development",
  //     link: "catalog/web-development"
  //   }
  // ];

  // python webDevelopment comes unser catelog is also a sublinks
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {

      const result = await apiConnector("GET", courseEndpoints.COURSE_CATEGORIES_API);
      console.log("Printing sublinks", result);
      setSubLinks(result.data.data);
    } catch (error) {
      console.log("Could not fetch the categories list");
    }

  }

  useEffect(() => {
    fetchSubLinks();
  }, []);


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
                      <div className='relative flex items-center gap-2 group'>
                        <p>{link.title}</p>
                        <IoChevronDownSharp/>
                        <div className='invisible absolute left-[50%]  translate-x-[-50%] translate-y-[50%] top-[10%] flex flex-col rounded-md bg-richblack-5 p-3 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>

                        <div className='absolute left-[50%] top-0 translate-y-[-45%]  h-6 w-6 rotate-45 bg-richblack-5 translate-x-[80%] rounded-sm '>
                        
                          </div>
                          {
                          subLinks.length?(
                            subLinks.map((subLinks,index)=>(
                              <Link to={`${subLinks.link}`} key={index}> 
                              <p className='mt-1 py-2 bg-richblack-25 rounded-md font-bold text-center'>{subLinks.title}</p>
                              </Link>
                            ))
                          ):
                          (<div></div>)
                        }
                         
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
                <IoCartOutline />
                {
                  totalItems > 0 &&
                  <span>
                    {totalItems}
                  </span>
                }
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