import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Login = ({ loginFunClose }) => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const { dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userObj = {
        username,
        password,

      }
      console.log(userObj)

      const res = await axios.post('http://localhost:5000/user/Login', userObj);
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.statusText === "OK" && localStorage.setItem("token", JSON.stringify(res.data.token) ?? null)
      res && Swal.fire({
        icon: 'success',
        title: 'Login successfull',
      })
      setTimeout(() => {
        res && window.location.reload()
      }, [1000])
    } catch (e) {
      e && Swal.fire({
        icon: 'error',
        title: 'Login failed',
      })
    }

  }
  return (
    <div className="container">
      <div className="form_container">
        <Form className="form_box">
          <div className="login_closeIocn" onClick={() => loginFunClose()}>
            <CloseIcon className="Logclose_icon" />
          </div>
          <h4 className="text-center text-muted fw-bold Login_title">Login</h4>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="text-muted fw-bold">Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label className="text-muted fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicSub">
            <Form.Control type="submit" className="btn btn-primary" onClick={handleSubmit} />
          </Form.Group>

        </Form>
      </div>
    </div>
  )
}

export default Login