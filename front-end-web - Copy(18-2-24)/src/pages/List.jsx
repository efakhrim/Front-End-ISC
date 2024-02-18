// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile"
import "./List.css"
import { Table } from "../components/Table";
import { Modal } from "../components/Modal";
import { EditList } from '../components/EditList';




//import axios from 'axios';
//import DataTable from 'react-data-table-component'

//import { useTable } from "react-table";


const List = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [ setEditOpen] = useState(false);
    const [rows, setRows] = useState([
      {
        incubator_id: "",
        name: "",
        birth_date: "",
        gender: "",
        parents: ""
      },

    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = async (targetIndex) => {
      setRows(rows.filter((_, idx) => idx !== targetIndex));
      

    };
  
    const handleEditRow = (idx) => {
      setRowToEdit(idx);
      setModalOpen(true);
    };
  
    const handleSubmit = (newRow) => {

      rowToEdit === null
        ? setRows([...rows, newRow])
        : setRows(
            rows.map((currRow, idx) => {
              if (idx !== rowToEdit) return currRow;
  
              return newRow;
            })
          );
    
        
    };


    return (
    <div className='home-page'>
      <div className='bg-home'>
        <Sidebar>
          <div className='db'>
            <div className='text'>Add Incubator List<Profile></Profile></div>
            
            <br></br>
            <div className='lst'>Incubator List</div>
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <button onClick={() => setModalOpen(true)} className="add-btn">
              Add
            </button>
      
            {modalOpen && (
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  setRowToEdit(null);
                }}
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />
              
            )}
            {setEditOpen && (
              <EditList
                closeModal={() => {
                  setEditOpen(false);
                  setRowToEdit(null);
                }}
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />
              
            )}
  
          </div>
        </Sidebar>
      </div>
    </div>
  )
}


export default List