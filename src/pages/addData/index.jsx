import React, { useState } from 'react'
import qs from 'qs';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from '@material-ui/core';

const AddData = () => {
    const history = useHistory();
    const [nama,setNama] = useState('')
    const [hargabeli,setHargaBeli] = useState('')
    const [hargajual,setHargaJual] = useState('')
    const [stock,setStock] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if(!nama||!hargabeli||!hargajual||!stock){
            return toast.error('Data Tidak Boleh Kosong')
        }
        if(hargabeli.length <4){
            return toast.error('Harga Beli Minimal 4 Karakter')
        }
        if(nama||hargabeli||hargajual||stock){
            return toast.success('Data Berhasil Di Tambah Kan')
        }
        
    }

    const onSubmit = () => {
        console.log('nama : ', nama);
        console.log('hargaBeli : ', hargabeli);
        console.log('hargaJual :', hargajual);
        console.log('stock : ', stock);
        // console.log('tanggal : ', tanggal);

        const data = { 'nama': nama, 'hargabeli': hargabeli, 'hargajual' : hargajual, 'stock' : stock,};
            const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'http://localhost:4000/v1/post' ,
            };
            console.log(options);
            axios(options);

    }

    

    return (
        <div>
            
            <div className="container mt-5">
                <ToastContainer />
            <form onSubmit={handleSubmit}>
                <h1>Tambah Data</h1>  
                <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nama</label>
                        <input type="text" className="form-control"  placeholder="Nama Barang" value={nama} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Harga Beli</label>
                        <input type="number" className="form-control"  placeholder="Harga Beli" value={hargabeli} onChange={(e) => setHargaBeli(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Harga Jual</label>
                        <input type="number" className="form-control"  placeholder="Harga Jual" value={hargajual} onChange={(e) => setHargaJual(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Stock</label>
                        <input type="number" className="form-control"  placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Tanggal</label>
                        <input type="date" className="form-control"  placeholder="Tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)}/>
                    </div> */}
                    
                        <button type="submit" class="btn btn-primary mx-2" onClick={onSubmit}>Tambah Data</button>
                        <a href="/"  className="btn btn-success" >Kembali</a>
                    
            </form>
            </div>

        </div>
    )
}

export default AddData
