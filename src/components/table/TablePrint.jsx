import React from 'react'
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';
import "./TablePrint.css"





const TablePrint = ({ netIncomes }) => {

    const sumIncome = netIncomes.reduce((acumulador, valorActual) => acumulador + valorActual.income, 0);

    const averageIncome = sumIncome / netIncomes.length;


    return (
        <div>
            <Table striped bordered hover variant="dark"  >
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((netIncome, index) =>
                        <tr key={index}>
                            <td>{netIncome.brand}</td>
                            <td>{netIncome.income} </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <p>Promedio de ingreso neto:</p>
            <p>{averageIncome}</p>
        </div>
    )
};



TablePrint.propTypes = {
    netIncomes: PropTypes.array,
}

export default TablePrint;
