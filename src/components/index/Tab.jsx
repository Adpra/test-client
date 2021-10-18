import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import axios from 'axios';
import { Button, Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 







const Tab = () => {
 
  const [dataBlog ,setDataBlog] = useState([]); 

    useEffect(() => {
      axios.get('http://localhost:4000/v1/posts')
      .then(result => {
        console.log('data API', result.data);
        const responseAPI= result.data;
        setDataBlog(responseAPI.data)
      
      })
      .catch(error => {
        console.log(error);
      })
    },[])


    const data = dataBlog.map(blog => {
      return {
                  Nama:blog.nama,
                  HargaBeli:blog.hargabeli,
                  HargaJual: blog.hargajual,
                  Stock:blog.stock,
                  Tanggal:blog.createdAt,
                  Action:blog._id,
                  
      }
  })


  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Apakah anda yakin ingin menghapus data ini.',
      buttons: [
        {
          label: 'Ya',
          onClick: () =>{
            axios.delete(`http://localhost:4000/v1/post/${id}`)
            .then(res => {
              console.log('success', res.data);
            }) 
            .catch(err => {
              console.log('err',err);
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => console.log('user tidak setuju')
        }
      ]
    });
  }

    
    const columns = [
      {
          title:'Nama', field: 'Nama'
      },
      {
          title:'Harga Beli', field: 'HargaBeli'
      },
      {
          title:'Harga Jual', field: 'HargaJual'
      },
      {
          title:'Stock', field: 'Stock'
      },
      {
          title:'Tanggal', field: 'Tanggal'
      },
      
      {
        
          title:'Action', render:dataBlog =>[<a href={`/Edit/${dataBlog.Action}`} className="btn btn-primary mx-2">Edit</a>, 
                                              <button onClick={() => confirmDelete(dataBlog.Action)} className="btn btn-danger">Hapus</button> ]
      },
      
      
    ] 


    return (
        <div style={{ maxWidth: '100%' }}>
         <MaterialTable title="Data Barang"  
                
                data={ data}
                columns={columns}
                options = {{
                    search:true,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                      },
                      rowStyle: {
                        backgroundColor: '#EEE',
                      },
                }}
             
                />
      </div>
    )
}

export default withRouter(Tab)


