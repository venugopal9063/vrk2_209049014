import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ContactScreen from './screens/Contactscreen.js';
const App = () => {
    return(
<BrowserRouter>
    <div> 
    <Routes>
    <Route path="/" element={<ContactScreen />} exact></Route>
    <Route path="/contact" element={<ContactScreen />}></Route>
        </Routes>
  </div>
  </BrowserRouter>
        )
}

export default App;