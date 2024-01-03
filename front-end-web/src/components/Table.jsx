/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect}from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = () => {
  const [rows, setList] = useState([]);

  useEffect(() => {

    loadList();
  }, []);
  const loadList = async () => {
    const result = await axios.get("http://157.230.37.110:3000/incubator");
    setList(result.data);
  };

  const deleteRow = async (incubator_id) => {
    await axios.delete(`http://157.230.37.110:3000/incubator/${incubator_id}`);
    loadList();
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Incubator ID</th>
            <th >Baby Name</th>
            <th >Born Date</th>
            <th>Gender</th>
            <th >Mother</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {


            return (
              <tr key={idx}>
                <td>{row.incubator_id}</td>
                <td>{row.name}</td>
                <td>{row.birth_date}</td>
                <td>{row.gender}</td>
                <td>{row.parents}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(row.incubator_id)}
                    />
                    <Link to={`/editlist/${row.incubator_id}`}>
                      <BsFillPencilFill
                        className="edit-btn"
                      />
                    </Link>

                  </span>
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
