import axios from 'axios';
import React, { useEffect, useState } from 'react'
import qs from 'qs';
import {withRouter} from 'react-router-dom'
import { Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const Edit = (props) => {
    const history = useHistory();
    const [nama,setNama] = useState('')
    const [hargabeli,setHargaBeli] = useState('')
    const [hargajual,setHargaJual] = useState('')
    const [stock,setStock] = useState('')
   
    useEffect(() => {
            console.log('params', props);
            const id = props.match.params.id
            axios.get(`http://localhost:4000/v1/post/${id}`)
            .then(res => {
                const data =res.data.data;
                console.log('data: ', res.data.message);
                setNama(data.nama)
                setHargaBeli(data.hargabeli)
                setHargaJual(data.hargajual)
                setStock(data.stock)
               

            })
            .catch(err => {
                console.log(err);
            })
    
    },[props])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!nama||!hargabeli||!hargajual||!stock){
            return toast.error('Data Tidak Boleh Kosong')
        }
      
        if(hargabeli.length <4){
            return toast.error('Harga Beli Minimal 4 Karakter')
        }
        
        if(nama||hargabeli||hargajual||stock){
            return toast.success('Data Berhasil Di Edit')
        }
       
    }
    

  
    const onSubmit = () => {
       
        console.log('nama : ', nama);
        console.log('hargaBeli : ', hargabeli);
        console.log('hargaJual :', hargajual);
        console.log('stock : ', stock);
    
        const id = props.match.params.id;
        const data = { 'nama': nama, 'hargabeli': hargabeli, 'hargajual' : hargajual, 'stock' : stock,};
            const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: `http://localhost:4000/v1/post/${id}` ,
            };
            console.log(options);
            axios(options);

    
           
            
    
    }
  
   
    return (
        <div>
            <ToastContainer />
            <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h1 className="">Edit Data</h1>  
                <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nama</label>
                        <input type="text" className="form-control"  value={nama} onChange={(e) => setNama(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Harga Beli</label>
                        <input type="number" className="form-control" value={hargabeli} onChange={(e) => setHargaBeli(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Harga Jual</label>
                        <input type="number" className="form-control"  value={hargajual} onChange={(e) => setHargaJual(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Stock</label>
                        <input type="number" className="form-control"  value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    
                        <button type="submit" className="btn btn-primary mx-2" onClick={onSubmit}>Edit Data</button>
                        <a href="/"  className="btn btn-success" >Kembali</a>
                   
            </form>
            </div>

        </div>
    )
}

export default withRouter(Edit)
