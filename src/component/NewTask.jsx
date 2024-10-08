import React from "react";
import "./styles/NewTask.css";
import lessthan from "../assets/Vector (4).png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import arrowDown from '../assets/Vector down.png'
const NewTask = () => {
  return (
    <>
      <main className="container">
        <Link className="text-decoration-none" to={'/task'}>
        <h1 className="h1-task my-5">
          <img src={lessthan} alt="" className="mb-1 pe-3 arrow" />
          New Task
        </h1>
        </Link>
        <div className="New-Task mt-5 ">
          <label className="task-lab">Task Title</label>
          <input
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="col-12 task"
          />
        </div>
        {/* Description */}
        <div className="New-Task-des mt-5 ">
          <label className="des-lab">Description</label>
          <textarea
            className="col-12 input"
            placeholder="Briefly describe your task..."
          ></textarea>
        </div>
        {/* ----------------- */}
        <div className="New-Task my-5 ">
          <label className="task-lab">Tag</label>
           <Dropdown >
          <Dropdown.Toggle variant="none" className="w-100 task-drop d-flex align-items-center justify-content-between">
            <div className="d-flex gap-3 mt-3">
              <p className="p-dropdown">Important</p>
              <p className="p-dropdown">Urgent</p>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className=" w-100">
            <Dropdown.Item><p>Important</p></Dropdown.Item>
            <Dropdown.Item><p>Urgent</p></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
       
        <button className="btn-newtask btn-lg mb-4">Done</button>
        <p className="text-center ">
          <Link className="back-to-top" to={"/task"}>
            Back To Top
          </Link>
        </p>
      </main>
    </>
  );
};

export default NewTask;
