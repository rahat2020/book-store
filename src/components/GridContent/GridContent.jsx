import React from 'react';
import './Gridcontent.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';

const GridContent = () => {
    const [data, setData] = useState([])
    // console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:5000/book/get')
            setData(res.data)
        }
        fetchData()
    }, [])

    const [show, setShow] = useState(false)
    const [item, setItem] = useState('')
    const handleShow = (item) => {
        setShow(true)
        setItem(item)
        // console.log(item)
    }
    const handleOff = () => {
        setShow(false)
    }

    return (
        <div className="container GC">
            <div className="row">
                {
                    data.map((item, index) => (

                        <div className="col-md-4" key={index} onClick={() => handleShow(item._id)}>
                            {/* <Link to={`/book/${item._id}`}> */}
                            <Card className="GridContent_card" style={{ width: '17rem', height: "380px", borderTopLeftRadius: '50%', borderTopRightRadius: '50%', border: "none" }}>
                                <Card.Img variant="top" src={item.img} className="card_img" />
                                <Card.Text className="card_text fw-bold text-dark ">
                                    {item.title}
                                </Card.Text>
                                <Card.Text className="card_text_two">
                                    {item.author}
                                </Card.Text>
                                <Card.Text className="card_text_per">
                                    {item.progress}
                                </Card.Text>
                                <Card.Text className="card_text_cat">
                                    {item.genre}
                                </Card.Text>
                            </Card>
                            {/* </Link> */}
                        </div>
                    ))
                }

            </div>

            <div className="bookModal">
                {
                    show ? <SingleBook handleOff={handleOff} item={item} /> : ''
                }
            </div>
        </div>
    )
}

export default GridContent