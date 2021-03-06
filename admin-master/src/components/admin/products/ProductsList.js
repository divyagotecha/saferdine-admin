import React, { Component } from 'react'
import Footer from '../footer/';
import HeaderCards from '../common/HeaderCards';


export class ProductsList extends Component {
    
    render() {
        return (
            <div>
                <React.Fragment>
                <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Product List</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Product List</li>
                        </ol>
                        <div className="row">
                           <HeaderCards />
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Product List</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Sr No.</th>
                                                        <th style={{ width: 180 }}>Product Name</th>
                                                        <th style={{ width: 150 }}>Price</th>
                                                        <th style={{ width: 200 }}>Category</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 100 }}>Availability</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr >
                                                        <td>1</td>
                                                        <td>Test12</td>
                                                        <td>&#8377;60</td>
                                                        <td>5abcdefghijkl</td>
                                                        <td>Available</td>
                                                        <td className="action-btns">
                                                            <i class="fas fa-check-square text-primary"></i>
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

export default ProductsList
