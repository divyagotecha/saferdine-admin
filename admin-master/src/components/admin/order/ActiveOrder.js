import React, { Component } from 'react'
import Footer from '../footer/';
import HeaderCards from '../common/HeaderCards';

export class ActiveOrder extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Active Orders</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Active Orders</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Active Orders</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Sr No.</th>
                                                        <th style={{ width: 130 }}>Order No</th>
                                                        <th style={{ width: 200 }}>Table No.</th>
                                                        <th style={{ width: 200 }}>Customer Name</th>
                                                        <th style={{ width: 130 }}>Time</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 100 }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr >
                                                        <td>1</td>
                                                        <td>15</td>
                                                        <td>5</td>
                                                        <td>Divya Gotecha</td>
                                                        <td>8:45</td>
                                                        <td>Pending</td>
                                                        <td className="action-btns">
                                                            {/* <i className="fas fa-eye pr-2" /> */}
                                                            {/* <i className="fas fa-edit pr-2" />
                                                            <i class="fas fa-trash-alt"></i> */}
                                                            <button type="button" className="btn " data-toggle="modal" data-target="#activeorder">
                                                                
                                                                 <i className="fas fa-eye pr-2 text-success" />
                                                            </button>

                                                            {/* Modal */}
                                                                <div className="modal fade " id="activeorder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                                    <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="text-center modal-title" id="exampleModalLabel">Order Details</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <table className="table table-bordered  "id="order" width="100%" cellspacing="0">
                                                                            <thead>
                                                                                <tr className="table-bordered modal-tab">
                                                                                    <th>Sr</th>
                                                                                    <th>Product Name</th>
                                                                                    <th>Product Quantity</th>
                                                                                    <th>Table No.</th>
                                                                                    <th>Time</th>
                                                                                    <th>Status</th>
                                                                                </tr>
                                                                            </thead>
                                                                                <tr class="table-bordered">
                                                                                    <th>1</th>
                                                                                    <th>Roti</th>
                                                                                    <th>3</th>
                                                                                    <th>2</th>
                                                                                    <th>2pm</th>
                                                                                    <th>Status</th>
                                                                                </tr>

                                                                                <tr class="table-bordered">
                                                                                    <th>1</th>
                                                                                    <th>Roti</th>
                                                                                    <th>3</th>
                                                                                    <th>2</th>
                                                                                    <th>2pm</th>
                                                                                    <th>Status</th>
                                                                                </tr>

                                                                                <tr class="table-bordered">
                                                                                    <th>1</th>
                                                                                    <th>Roti</th>
                                                                                    <th>3</th>
                                                                                    <th>2</th>
                                                                                    <th>2pm</th>
                                                                                    <th>Status</th>
                                                                                </tr>

                                                                                <tr class="table-bordered">
                                                                                    <th>1</th>
                                                                                    <th>Roti</th>
                                                                                    <th>3</th>
                                                                                    <th>2</th>
                                                                                    <th>2pm</th>
                                                                                    <th>Status</th>
                                                                                </tr>
                                                                        </table>
                                                                    </div>
                                                                            <div class="modal-footer">
                                                                                {/* <!-- <button type="button" class="btn accept" data-dismiss="modal">Accept</button>
                                                                                <button type="button" class="btn reject">Reject</button> --> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
               
                </React.Fragment>
                
            </div>
        )
    }
}


export default ActiveOrder
