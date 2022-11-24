import React from 'react';
import { useState } from 'react'
import './Content.css';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import GridContent from '../GridContent/GridContent';
import ListContent from '../ListContent/ListContent';

const Content = () => {

    const [show, setShow] = useState(true)
    const [showList, setShowList] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const showListItem = () => {
        setShowList(true);
        setShow(false);
        setShowSearch(false);

    }
    const showGrid = () => {
        setShow(true);
        setShowList(false);
    }
    const showSearchItem = () => {
        setShowSearch(true);
    }

    return (
        <div className="container">
            <div className="content shadow">
                <div className="content_header">
                    <div className="Cheader_left">
                        <h3>Book Library</h3>
                        <div className="chleft_icon">
                            <i className="fa-solid fa-ellipsis dot_icon"></i>
                        </div>
                    </div>
                    <div className="Cheader_right">
                        <div className="grid_icon_container" id={show ? 'bgGray' : 'bgNone'} onClick={showGrid}>
                            <GridViewIcon className="grid_icon" />
                        </div>

                        <div className="grid_icon_container" id={showList ? 'bgGray' : 'bgNone'} onClick={showListItem}>
                            <FilterListIcon className="list_icon" />
                        </div>

                        <div className="grid_icon_container" id={showSearch ? 'bg' : 'bgNone'} onClick={showSearchItem}>
                            <SearchIcon className="search_icon" />
                        </div>
                    </div>
                </div>

                <div className="card_content">
                    {
                        show ?
                            <GridContent />
                            :
                            <ListContent />


                    }
                </div>
            </div>
        </div>
    )
}

export default Content