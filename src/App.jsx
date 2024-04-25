import React from 'react'
import TablePrint from './components/table/TablePrint';
import "./App.css"


const App = () => {

  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];


  return (
    <div>
      <TablePrint
      netIncomes={netIncomes}
      />
    </div>
  )
};



export default App;