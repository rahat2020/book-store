import React from 'react';
import './Gridcontent.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import one from '../../asset/cover-one.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GridContent = () => {
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
        <div className="container">
            <div className="row">
                {
                    data.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <Card style={{ width: '17rem', height: "380px", borderTopLeftRadius: '50%', borderTopRightRadius: '50%', border: "none" }}>
                                <Card.Img variant="top" src={item.img} className="card_img" />
                                <Card.Text className="card_text fw-bold text-dark ">
                                    {item.title}
                                </Card.Text>
                                <Card.Text className="card_text_two">
                                    {item.author}
                                </Card.Text>
                                <Card.Text className="card_text_per">
                                    72%
                                </Card.Text>
                                <Card.Text className="card_text_cat">
                                    {item.genre}
                                </Card.Text>
                            </Card>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default GridContent