import React, { Component } from 'react';
import HeaderCards from '../common/HeaderCards';
import Footer from '../footer/';

export default class Home extends Component {
    render() {
        return (
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Dashboard</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Recent Orders</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Order ID</th>
                                                        <th style={{ width: 130 }}>Payment Method</th>
                                                        <th style={{ width: 200 }}>Order Date</th>
                                                        <th style={{ width: 200 }}>Delivery Date</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 130 }}>Total</th>
                                                        <th style={{ width: 100 }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr >
                                                        <td>#ORDER 123</td>
                                                        <td>Card </td>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            2013-01-12 09:10
                                                                    </td>
                                                        <td>
                                                            Pending
                                                                    </td>
                                                        <td>&#8377;5000</td>
                                                        <td className="action-btns">

                                                            <i className="fas fa-eye" />

                                                            <i className="fas fa-edit" />
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                 <Footer /> 
            </div>

        );
    }
}

