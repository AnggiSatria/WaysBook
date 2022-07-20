import React from 'react';
import Nav from "../components/navbar/CustomerNavbar";
import Books from "../components/listBook.jsx/books";

const ListBook = () => {
    return (
        <div>
            <Nav/>
            <Books/>
        </div>
    );
};

export default ListBook;