import React from 'react';
import "./App.css";
import ListComponent from "./Components/ListComponent";
import listdatas from './utility/listdata';
import TableComponent from "./Components/TableComponents";
import tableDatas from "./utility/tabledata";




const App = () => {
    return (
       <>
        <TableComponent tabledatas={tableDatas} />
       </> 
    );
};

export default App;
