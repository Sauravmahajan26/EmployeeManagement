import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSlice, { userAction } from "../store/userSlice";
import { FaFilter } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "./Image/logo.jpeg";

function Header() {
  const dispatch = useDispatch();
  const [selectGender, setSelectGender] = useState("all");
  const [selectCountry, setSelectCountry] = useState("all");

  const users = useSelector((store) => store.users.allUsers);

  const countries = users.map((user) => user.address.country);
  const country = countries.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const gender = users.map((user) => user.gender);
  const genders = gender.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") {
      setSelectGender(value);
      dispatch(userAction.filterUser({ selectGender: value, selectCountry }));
    } else if (name === "country") {
      setSelectCountry(value);
      dispatch(userAction.filterUser({ selectGender, selectCountry: value }));
    }
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row ">
          <div className="col imagediv">
            <img
              src={Logo}
              alt="Logo"
              className="logo"
              style={{ height: "70px", width: "70px ", margin: "20px" }}
            />
          </div>
          <div className="col-6"></div>
          <div className="col">
            <div className="menu">
              <IoReorderThreeOutline
                style={{ height: "30px", width: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a>
            <h1 className="headingemp">Employees</h1>
          </a>
        </div>

        <div className="col-md-3 text-end">
          <div className="filters">
            <div className="filter_icon">
              <FaFilter />
            </div>
            <select name="country" id="country" onChange={handleFilterChange}>
              <option value="all">Country</option>
              {country.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select name="gender" id="gender" onChange={handleFilterChange}>
              <option value="all">Gender</option>
              {genders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
