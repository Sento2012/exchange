// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container/Container";
import {MouseContextProvider} from "./context/MouseContext";

function App() {
    const [containers, setContainers] = useState([{id: 1}])

    const addContainer = () => {
        setContainers(prevState => [...prevState, {id: 1}])
    }

    return (
        <div className="App">
            <div className="btn" onClick={addContainer}>Добавить элемент</div>
            <hr/>

            {
                containers.map((item, key) => {
                    return <MouseContextProvider key={key}>
                        <Container>Body</Container>
                    </MouseContextProvider>
                })
            }
        </div>
    );
}

export default App;
