import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiArrowsUpDown } from "react-icons/hi2";
import Header from "./Header";
import Employee from "./Employee";
import { userAction } from "../store/userSlice";
import AllUsers from "./AllUsers";
import Loading from "./Loading";

function Home() {
  const users = useSelector((store) => store.users.filteredUsers);
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  const [namefilter, setNameFilter] = useState("ASC");
  const [idFilter, setIdFilter] = useState("ASC");
  const [ageFilter, setAgeFilter] = useState("ASC");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handleIdSorting = () => {
    if (idFilter === "ASC") {
      setIdFilter("DESC");
    } else {
      setIdFilter("ASC");
    }
    dispatch(userAction.sortUserById(idFilter));
  };

  const handleNameSorting = () => {
    if (namefilter === "ASC") {
      setNameFilter("DESC");
    } else {
      setNameFilter("ASC");
    }

    dispatch(userAction.sortUserByName(namefilter));
  };

  const handleAgeSorting = () => {
    if (ageFilter === "ASC") {
      setAgeFilter("DESC");
    } else {
      setAgeFilter("ASC");
    }

    dispatch(userAction.sortUserByAge(ageFilter));
  };

  return (
    <>
      <div className="container">
        <Header />
        <AllUsers page={currentPage} itemsPerPage={itemsPerPage} />
        {fetchStatus.currentlyFetching ? (
          <Loading />
        ) : (
          <>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>
                    ID &nbsp;
                    <a
                      onClick={handleIdSorting}
                      style={{
                        cursor: "pointer",
                        color: idFilter === "ASC" ? "red" : "green",
                      }}
                    >
                      &#8645;
                    </a>
                  </th>
                  <th>Image</th>
                  <th>
                    Full Name &nbsp;
                    <a
                      onClick={handleNameSorting}
                      style={{
                        cursor: "pointer",
                        color: namefilter === "ASC" ? "red" : "green",
                      }}
                    >
                      &#8645;
                    </a>
                  </th>
                  <th>
                    Demography &nbsp;
                    <a
                      onClick={handleAgeSorting}
                      style={{
                        cursor: "pointer",
                        color: ageFilter === "ASC" ? "red" : "green",
                      }}
                    >
                      &#8645;
                    </a>
                  </th>
                  <th>Designation</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <Employee key={user.id} user={user} />
                ))}
              </tbody>
            </table>
            <br />
            <hr />
            <br />
            <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-center list">
                <li className={`page-item ${currentPage === 1 && "disabled"} `}>
                  <button
                    className="page-link"
                    onClick={() => handlePage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>
                {currentPage > 1 && (
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => handlePage(currentPage - 1)}
                    >
                      {currentPage - 1}
                    </button>
                  </li>
                )}
                <li className="page-item">
                  <button
                    className="page-link active"
                    onClick={() => handlePage(currentPage)}
                  >
                    {currentPage}
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePage(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </button>
                </li>
                <li className="page-item ">
                  <button
                    className="page-link"
                    onClick={() => handlePage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
