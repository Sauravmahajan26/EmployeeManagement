import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice";
import { fetchAction } from "../store/fetchingstatusSlice";

function AllUsers({ page, itemsPerPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAction.markfetchingStarted());
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=${itemsPerPage}&skip=${
            (page - 1) * itemsPerPage
          }`
        );
        const data = await response.json();

        dispatch(fetchAction.markFetchingDone());
        dispatch(userAction.addInitUser(data.users));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(fetchAction.markfetchDone());
      }
    };

    fetchData();
  }, [dispatch, page, itemsPerPage]);

  return <div></div>;
}

export default AllUsers;
