import React, { useEffect, useState, useContext } from 'react';
import './SingleBook.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import close from '../../asset/close.png';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const SingleBook = ({ item, handleOff }) => {


    // console.log(token.id)


    // get data from databse
    const [data, setData] = useState([])
    // console.log(data._id)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000/book/get/${item}`)
            setData(res.data)
        }
        fetchData()
    }, [item])

    // console.log(item)
    // DELETE THE POST
    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    };

    // console.log(config)

    // context part
    const { user, token } = useContext(AuthContext)
    const userId = token.id
    const id = data._id
    console.log('books id', id)
    console.log('user id', userId)

    const handleDeletePost = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/book/${id}/${userId}`, {
                data: { username: user.username },
            }, config);
            res.data && Swal.fire({
                icon: 'success',
                title: 'Post Deleted Successfully',
                text: 'To see the changes reload the page',
            })
            setInterval(() => {
                res && window.location.reload()
            }, [1000])
        } catch (err) {
            console.log(err);
            err && Swal.fire({
                icon: 'error',
                title: 'Post delete failed',
            })
        }
    }



    return (
        <div className="container">
            <div className="Sb">
                <Card className="Sbcard" style={{ width: '25rem', padding: '2rem', borderRadius: '2rem' }}>
                    <div className="actions d-flex justify-content-around align-items-center mb-2">
                        <ModeEditIcon className="actionBtn" />
                        <DeleteIcon className="actionBtn" onClick={handleDeletePost} />
                    </div>
                    <img src={close} alt="" className="sbClose" onClick={handleOff} />
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
                            <Card.Text className="closeTextBtn" onClick={handleOff}>Close</Card.Text>
                            <Button variant="primary">Continue Reading</Button>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default SingleBook