import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import "../../style.css"

export default function Dashboard() {
    return (
        <div>
            <Sidenav/>
            

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">
                        <div className="dbox dbox--color-2">
                            <div className="dbox__body">
                                <span className="dbox__count">8,252</span>
                                <span className="dbox__title">Active Students</span>
                            </div>

                            <div className="dbox__action">
                                <a href="#" className="dbox__action__btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="dbox dbox--color-2">
                            <div className="dbox__body">
                                <span className="dbox__count">100</span>
                                <span className="dbox__title">Active academic staff</span>
                            </div>

                            <div className="dbox__action">
                                <a href="#" className="dbox__action__btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="dbox dbox--color-2">
                            <div className="dbox__body">
                                <span className="dbox__count">100</span>
                                <span className="dbox__title">Active academic staff</span>
                            </div>

                            <div className="dbox__action">
                                <a href="#" className="dbox__action__btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="dbox dbox--color-2">
                            <div className="dbox__body">
                                <span className="dbox__count">2502</span>
                                <span className="dbox__title">Subjects</span>
                            </div>

                            <div className="dbox__action">
                                <a href="#" className="dbox__action__btn">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
