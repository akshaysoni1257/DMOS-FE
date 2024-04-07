import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.png";
import ResetLocation from "../../helpers/ResetLocation";
import axios from "axios";

const MenuCategories = ({ allCategories, changeCategory, resetPagination, findMenuItem }) => {
  
  const [categories,setCategories] = useState([]);
  const fetchCategories = async () => {
  const result = await axios.get("http://localhost:3000/admin/category/getCategories?page=1&limit=20",{
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjA1ODVjNDNiNzcyZThiMjNjZDhkMGEiLCJpYXQiOjE3MTE2Mzc5NTZ9.v0rOymDaLNk-w9oZigZylgf_vyNykQZq9Nagi8ezXt0"
      }
    });
    if(result.status===200) {
      setCategories(result?.data?.categories);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[])

  
  return (
    <article className="side-menu">
      <section className="menu-search-section">
        <input
          type="text"
          className="menu-search"
          placeholder="search..."
          onChange={findMenuItem}
        />
        <img src={SearchIcon} alt="" aria-hidden="true" className="menu-search-icon" />
      </section>
      <ul>

      {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              onClick={() => {
                changeCategory(category.name);
                ResetLocation();
                resetPagination();
              }}
            >
              {category.name}
            </NavLink>
          </li>
        ))}



        {/* Old Categories Start */}
        {/* {allCategories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              onClick={() => {
                changeCategory(category.name);
                ResetLocation();
                resetPagination();
              }}
            >
              {category.name}
            </NavLink>
          </li>
        ))} */}
        {/* Old Categories End */}


      </ul>
    </article>
  );
}
export default MenuCategories;
