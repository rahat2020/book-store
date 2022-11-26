import React, { useContext, useState, useEffect } from 'react';
import AddBook from '../AddBook/AddBook';
import './Sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [show, setShow] = useState(false)
  const bookOpen = () => {
    setShow(true)
    console.log('Book opened')
  }
  const hanldeClose = () => {
    setShow(false)
  }

  // context part
  const { dispatch, user } = useContext(AuthContext)
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  // dark mode implementations
  const [theme, setTheme] = useState("light-theme")
  // console.log(theme)
  const handleClick = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme")
    } else {
      setTheme("dark-theme")
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // toast part
  const notify = () => toast("Please login or Register, Thank you!");

  return (
    <>
      <ToastContainer/>
      <div className="container shadow">
        <div className="list_items">
          <h5 className="list_title">Library</h5>

          <div className="list_container">
            <div className="li_one">
              <div className="list_item_container">
                <i className="fa-sharp fa-solid fa-play icons"></i>
                <span className="play_title">My books</span>
              </div>
              <div className="player_container">
                <span className="play_count">15</span>
              </div>
            </div>
            {
              user ?
                <div className="li_one mt-5" onClick={bookOpen}>
                  <div className="list_item_container">
                    <i className="fa-solid fa-plus icons"></i>
                    <span className="play_title">Add new book</span>
                  </div>
                </div>
                :
                <div className="li_one mt-5" onClick={notify}>
                  <div className="list_item_container">
                    <i className="fa-solid fa-plus icons"></i>
                    <span className="play_title">Add new book</span>
                  </div>
                </div>

            }
          </div>

          <h5 className="list_title mt-5">Settings</h5>

          {
            theme === "dark-theme" ?

              <div className="list_container" onClick={() => handleClick()}>
                <div className="li_one">
                  <div className="list_item_container">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                    <span className="play_title">Light Mode</span>
                  </div>
                  <div className="player_container">
                    <span className="play_count"></span>
                  </div>
                </div>
              </div>
              :
              <div className="list_container" onClick={() => handleClick()}>
                <div className="li_one">
                  <div className="list_item_container">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                    <span className="play_title">Dark Mode</span>
                  </div>
                  <div className="player_container">
                    <span className="play_count"></span>
                  </div>
                </div>
              </div>

          }

          {
            user ?
              <div className="list_container" >
                <div className="li_one" onClick={handleLogout}>
                  <div className="list_item_container">
                    <LogoutIcon />
                    <span className="play_title">Logout</span>
                  </div>
                  <div className="player_container">
                    <span className="play_count"></span>
                  </div>
                </div>
              </div>
              :
              " "
          }
        </div>
      </div>
      <div className="addBook">
        {
          show ? <AddBook hanldeClose={hanldeClose} /> : ''
        }
      </div>
    </>
  )
}

export default Sidebar