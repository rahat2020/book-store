import React from 'react';
import './AddBook.css';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const AddBook = ({ hanldeClose }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [file, setFile] = useState('')
    const [opened, setOpened] = useState('')
    const [genre, setGenre] = useState('')
    const [progress, setProgress] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data
            const userObj = {
                author,
                title,
                genre,
                opened,
                progress,
                img: url,

            }
            console.log(userObj)

            const res = await axios.post('http://localhost:5000/book/add', userObj);
            console.log(res.data)
            res && Swal.fire({
                icon: 'success',
                title: 'Book add successfully',
            })
        } catch (e) {
            e && Swal.fire({
                icon: 'error',
                title: 'Books add failed',
            })
        }

    }
    return (
        <div className="container">
            <div className="Addform_container">
                <div className="addCl" onClick={() => hanldeClose()}>
                    <CloseIcon className="close_icon" />
                </div>
                <Form className="Addform_box">
                    <h4 className="text-center text-muted fw-bold add_title">Add new book</h4>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="text-muted fw-bold">Book Title</Form.Label>
                        <Form.Control type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label className="text-muted fw-bold">Author Name</Form.Label>
                        <Form.Control type="text" placeholder="author name`" onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicImg">
                        <Form.Label className="text-muted fw-bold">Book Image</Form.Label>
                        <Form.Control type="file"  onChange={(e) => setFile(e.target.files[0])} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicGen">
                        <Form.Label className="text-muted fw-bold">Genre</Form.Label>
                        <Form.Control type="text" placeholder="genre" onChange={(e) => setGenre(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicOpn">
                        <Form.Label className="text-muted fw-bold">Opened</Form.Label>
                        <Form.Control type="text" placeholder="opened" onChange={(e) => setOpened(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPro">
                        <Form.Label className="text-muted fw-bold">Progress</Form.Label>
                        <Form.Control type="text" placeholder="progress" onChange={(e) => setProgress(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control type="submit" className="btn btn-primary" onClick={handleSubmit} />
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}

export default AddBook