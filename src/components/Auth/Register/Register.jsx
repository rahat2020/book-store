import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const Register = ({registerFunClose,loginFun}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState('');
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data
            const userObj = {
                username,
                email,
                img: url,
                password,

            }
            console.log(userObj)

            const res = await axios.post('http://localhost:5000/user/register', userObj);
            console.log(res.data)
            res && Swal.fire({
                icon: 'success',
                title: 'Registrations successfull',
            })
            loginFun(true)
            // setTimeout(() => {
            //     res && window.location.reload()
            //   }, [1000])
        } catch (e) {
            e && Swal.fire({
                icon: 'error',
                title: 'Registrations failed',
            })
        }

    }

    


    return (
        <div className="container">
            <div className="form_container">
                <Form className="form_box">
                <div className="register_closeIocn" onClick={() => registerFunClose()}>
                    <CloseIcon className="Regclose_icon" />
                </div>
                    <h4 className="text-center text-muted fw-bold register_title">Register</h4>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="text-muted fw-bold">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="text-muted fw-bold">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="text-muted fw-bold">Email Image</Form.Label>
                        <Form.Control type="file" placeholder="Enter email" onChange={(e) => setFile(e.target.files[0])} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label className="text-muted fw-bold">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control type="submit" className="btn btn-primary" onClick={handleSubmit} />
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}

export default Register