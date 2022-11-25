import React, { useEffect, useState } from 'react';
import './SingleBook.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import close from '../../asset/close.png';

const SingleBook = ({ item,handleOff }) => {
    // console.log(item)
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000/book/get/${item}`)
            setData(res.data)
        }
        fetchData()
    }, [item])
    return (
        <div className="container">
            <div className="Sb">
                <Card className="Sbcard" style={{ width: '25rem', padding: '2rem', borderRadius: '2rem' }}>
                        <img src={close} alt="" className="sbClose" onClick={handleOff}/>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Img variant="top" src={data.img} className="sbImg" />
                    </div>
                    <Card.Body className='sbBody'>
                        <Card.Title className="sbTitle">{data.title}</Card.Title>
                        <Card.Text className="text-muted">{data.author}</Card.Text>
                        <Card.Text className="text-dark"> 
                            Hundreds of years before the Toralii attacked Earth, destroying the cities of Beijing, Tehran and Sydney, before they developed the voidwarp technology and destroyed their homeworld, they warred amongst themselves.
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-start text-center">
                            <Card.Text className="closeTextBtn">Close</Card.Text>
                            <Button variant="primary">Continue Reading</Button>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default SingleBook