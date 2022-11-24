import React from 'react';
import './ListContent.css';
import { Table } from 'react-bootstrap';
import up from '../../asset/up.png';
import down from '../../asset/down.png';
import one from '../../asset/cover-one.png';

const ListContent = () => {
    return (
        <div>
            <Table hover>
                <thead >
                    <tr>
                        <th className="L_title">
                            <div className="d-flex justify-content-start align-items-center">
                                Book Title & Author
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={up} alt="" className="up" />
                                    <img src={down} alt="" className="up" />
                                </div>
                            </div>

                        </th>
                        <th className="L_title">
                            <div className="d-flex justify-content-start align-items-center">
                                Genre
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={up} alt="" className="up" />
                                    <img src={down} alt="" className="up" />
                                </div>
                            </div>
                        </th>
                        <th className="L_title">
                            <div className="d-flex justify-content-start align-items-center">
                                Reading Progress
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={up} alt="" className="up" />
                                    <img src={down} alt="" className="up" />
                                </div>
                            </div>
                        </th>
                        <th className="L_title">
                            <div className="d-flex justify-content-start align-items-center">
                                Last Opened
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={up} alt="" className="up" />
                                    <img src={down} alt="" className="up" />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="books_data">
                                <img src={one} alt="" className="books" />
                                <div className="books_details">
                                    <span className="text-dark">Faith</span>
                                    <span>David Backham</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                <span className="text-secondary">Fiction</span>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                <span className="text-secondary">76%</span>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                <span className="text-secondary">12 mintutes ago</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ListContent