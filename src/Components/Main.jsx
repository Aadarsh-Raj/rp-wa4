import React, {useState} from 'react'
import Header from './Header'
import Button from './Button'
import AddPersonContainer from './AddPersonContainer'
import RetrieveInformation from './RetrieveInformation'
import './Style/main.css'
const Main = () => {
const [container, setContainer] = useState(<AddPersonContainer />);
const [data, setData] = useState(JSON.parse(localStorage.getItem("userdetails"))) || "";

function changeNav(value){
switch (value){
    case "addContainer":
        setContainer(<AddPersonContainer data={data} setData={setData}/>);
        break;
    case "fetchContainer":
        setContainer(<RetrieveInformation data={data}/>);
        break;
    default :
    setContainer("");
}
}
  return (
    <>
    <main className="main">
        <Header />
        <section className="switch-link-container">
            <Button btnValue="Add New Person" outputValue="addContainer" func={(v)=>changeNav(v)}/>
            <Button btnValue="Retrieve Information" outputValue="fetchContainer" func={(v)=>changeNav(v)}/>
        </section>
        <section className="rendered-container">
            {
                container
            }
        </section>
    </main>
    </>
  )
}

export default Main
