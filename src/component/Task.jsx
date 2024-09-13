import React from "react";
import add from "../assets/Vector (3).png";
import "../component/styles/Task.css";
import edit from "../assets/clarity_note-edit-line.png";
import del from "../assets/fluent_delete-24-regular.png";
import { Link } from "react-router-dom";
const Task = () => {
  return (
    <main className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="h1-task">My Tasks</h1>
        <Link to={'/newtask'} className="text-decoration-none">
          <p className=" text-end">
            <img src={add} alt="" className="pe-2 mb-1" />
            Add New Task
          </p>
        </Link>
      </div>
      {/* -------------------------------Task 1----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/edittask"}>
              <button className="btn-task">
                <img src={edit} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={del} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ---------------------------------Task 2----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/edittask"}>
              <button className="btn-task">
                <img src={edit} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={del} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ------------------------------------Task 3--------------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/edittask"}>
              <button className="btn-task">
                <img src={edit} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={del} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* --------------------------------------Task 3------------------------------------------ */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/edittask"}>
              <button className="btn-task">
                <img src={edit} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={del} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      <p className="text-center ">
        <Link className="back-to-top" to={"/task"}>
          Back To Top
        </Link>
      </p>
    </main>
  );
};

export default Task;
