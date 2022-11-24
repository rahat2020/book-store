import React from 'react'
import Content from '../Content/Content'
import Topbar from '../Navbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
    return (
        <>
            <Topbar />
            <div className=" " style={{overflow: 'hidden'}}>

                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home