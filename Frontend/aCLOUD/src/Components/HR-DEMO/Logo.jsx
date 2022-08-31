import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

import { IoIosChatboxes } from "react-icons/io";

import report from "../../assets/Images/report.png"

const Logo = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <div className={`${styles.row} my-5 row`}>
        <h1 className="text-center my-3">
          Bank Sales Executive Role FEEDBACK
        </h1>
        <div className="col-md-6 m-auto">
          <h4>Date : <span>{date}</span></h4>
          <div className="d-flex gap-2">
            <h4>CANDIDATE NAME : <span>Jhon Doe</span></h4>
            <Link to="/response">
              <button className="btn btn-dark btn-sm">
                <IoIosChatboxes className="fs-2 me-1" />RESPONSES
              </button>
            </Link>
          </div>
          <hr />


        </div>
        <div className="col-md-6 d-flex justify-content-end m-auto">
          <img className="img-fluid" src={report} alt="report" width={300} />
        </div>
      </div>
    </>
  );
};

export default Logo;
