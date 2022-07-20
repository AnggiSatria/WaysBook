import React from 'react';
import Nav from "../components/navbar/AdminNavbar";
import EditBookForm from "../components/Edit Book/EditBookForm";
import {useParams} from "react-router-dom";

const EditBook = () => {
    const {id} = useParams();
    return (
        <div>
            <Nav/>
            <EditBookForm id={id}/>
        </div>
    );
};

export default EditBook;