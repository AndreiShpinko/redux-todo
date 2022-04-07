import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actionCreators/filterActions";

import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  const amountTodos = useSelector((state) => state.allTodos.todos).length;

  const handleFilterAll = () => dispatch(setFilter(0));
  const handleFilterActive = () => dispatch(setFilter(1));
  const handleFilterCompleted = () => dispatch(setFilter(2));

  return (
    <div className="dashboard">
      <div className="filter">
        <Button style={filter === 0} clickFunction={handleFilterAll}>
          {window.innerWidth < 767 ? <i class="fa-solid fa-list"></i> : 'All'}
        </Button>
        <Button style={filter === 1} clickFunction={handleFilterActive}>
          {window.innerWidth < 767 ? <i class="fa-solid fa-check"></i> : 'Active'}
        </Button>
        <Button style={filter === 2} clickFunction={handleFilterCompleted}>
          {window.innerWidth < 767 ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            'Completed'
          )}
        </Button>
      </div>
      <span>{window.innerWidth < 767 ?'All':'All todos'}: {amountTodos}</span>
    </div>
  );
};

export default Dashboard;
