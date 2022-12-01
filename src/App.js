import { Routes, Route} from "react-router-dom";
import React from 'react'
import './App.css'
import {Header} from './section/index'
import {About} from './Pages/index'
import {Portfolio} from "./Pages/index"
import {Education} from "./Pages/index"
import {Skills} from "./Pages/index"
import {Contact} from "./Pages/index"

const App = () => {

    return(
        <>

                <Routes>
                   <Route path='/' element={<Header/>}/>
                   <Route path='/About' element={<About/>}/>
                   <Route path='/Portfolio' element={<Portfolio/>}/>
                   <Route path='/Education' element={<Education/>}/>
                   <Route path='/Skills' element={<Skills/>}/>
                   <Route path='/Contact' element={<Contact/>}/>
                </Routes>
                
        </>
    )
}
export default App