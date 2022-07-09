import React from 'react'
import Table from 'react-bootstrap/Table'

function Form() {

    const list = [
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
        {
            no : "1",
            user : "aaa",
            evidence : "bca",
            product : "secret her",
            total : "Rp. 500.000",
            status : "sucess"
        },
    ]

  return (
    <div>
        <h3>Incoming Transaction</h3>

        <div className="form">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>User</th>
                    <th>Evidence Of Transfer</th>
                    <th>Product Purchase</th>
                    <th>Total Payment</th>
                    <th>Status Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value) => {
                        return <tr>
                    <td>{value.no}</td>
                    <td>{value.user}</td>
                    <td>{value.evidence}</td>
                    <td>{value.product}</td>
                    <td>{value.total}</td>
                    <td>{value.status}</td>
                    </tr>
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Form