import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import './Header.css';
import { useAuth } from '../components/context/auth';
import {toast} from "react-toastify"

import { IoIosArrowDropdown } from "react-icons/io";
import SearchInput from '../components/Form/SearchInput';


import useCategory from '../hooks/useCategory';
import { useCart } from '../components/context/cart';
// import './Head.css';
import {Badge} from "antd"

const Header = () => {
  const {auth,setAuth} = useAuth();
  const categories = useCategory();
  const [cart,setCart] = useCart();
  const navigate = useNavigate();
  const[openProfile,setOpenProfile] = useState(false);
  // const [openCategory, setOpenCategory] = useState(false);


  // console.log(auth)
  const handleLogout = ()=>{

    toast.success("Logout Successfully");
    setTimeout(()=>{
    navigate("/login");
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
       
      localStorage.removeItem("auth");
      localStorage.removeItem("cart");
    },1000)
  }

  return (
    <div className="navbar">
      <div className="nav">
        <div className="left">
          <li>
            <FaCartShopping style={{ fontSize: "2rem" }} />
            <Link to={"/"} className="cart-icon">
              THRIVE CART
            </Link>
          </li>
        </div>
        <div className="right">
          <li>
            <SearchInput />
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {/* <li
            onClick={(prev) => {
              setOpenCategory((prev) => !prev);
            }}
          >
            Category
            <IoIosArrowDropdown
              style={{ marginLeft: "3px", fontSize: "1rem" }}
            />
          </li>
          {openCategory &&
            categories?.map((c) => (
              <>
                <div className="Categorydropdown">
                  <ul>
                    <li>
                      <NavLink>{c.name}</NavLink>
                    </li>
                  </ul>
                    <option value={c.name}>{c.name}</option>
                </div>
              </>
            ))} */}

          {/* <li>
            <NavLink to="/category">Category</NavLink>
          </li> */}
          {!auth.user ? (
            <>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  onClick={(prev) => {
                    setOpenProfile((prev) => !prev);
                  }}
                >
                  {auth?.user?.name}
                  <IoIosArrowDropdown
                    style={{ marginLeft: "3px", fontSize: "1rem" }}
                  />
                </NavLink>
              </li>

              {openProfile && (
                <>
                  <div className="dropdown">
                    <ul>
                      <li style={{color:"black"}}>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={handleLogout}>Logout</NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </>
          )}

          <li>
            <NavLink to={"/cart"}>Cart  </NavLink>
            <Badge count={cart?.length} showZero style={{ marginTop: "-2.3em",marginRight:"-13px",position:"absolute"}}></Badge>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header