import React from 'react';
import './ListContent.css';
import { Table } from 'react-bootstrap';
import up from '../../asset/up.png';
import down from '../../asset/down.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ListContent = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:5000/book/get')
            setData(res.data)
        }
        fetchData()
    }, [])

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
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="books_data">
                                        <img src={item.img} alt="" className="books" />
                                        <div className="books_details">
                                            <span className="text-dark">{item.title}</span>
                                            <span>{item.author}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                        <span className="text-secondary">{item.genre}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                        <span className="text-secondary">{item.progress}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex h-100 mt-4 justify-content-start align-items-center">
                                        <span className="text-secondary">{item.opened}</span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default ListContent