import React, { Component } from 'react'

export default class HeaderCards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card purple">
                                    <div className="card-content">
                                        <span className="card-title">Order Pending</span>
                                        <span className="card-count">2</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fab fa-rev" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card red">
                                    <div className="card-content">
                                        <span className="card-title">Order Cancel</span>
                                        <span className="card-count">0</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="far fa-times-circle" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card info">
                                    <div className="card-content">
                                        <span className="card-title">Order Process</span>
                                        <span className="card-count">5</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-sync-alt rpt_icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card success">
                                    <div className="card-content">
                                        <span className="card-title">Order Completed</span>
                                        <span className="card-count">10</span>
                                    </div>
                                    <div className="card-media">
                                    <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                            </div>
                            </React.Fragment>
        )
    }
}
