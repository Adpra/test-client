
import React, { useEffect, useState } from 'react'
import Tab from './Tab'

const Content = () => {

    return (
        <div>
          {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <a href="/AddData" className="btn btn-primary">Tambah Data</a>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body">
        
       <Tab />
      </div>
      {/* /.card-body */}
      {/* /.card-footer*/}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}


        </div>
    )
}

export default Content
