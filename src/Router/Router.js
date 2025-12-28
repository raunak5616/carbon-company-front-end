import {Routes,Route} from 'react-router-dom';
import { Contact } from '../pages/contact';
import { About } from '../pages/about';
import { Home } from '../pages/Home';
export const Router = () =>{
    return(

        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
        </Routes>
        </>
    )
}