import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import DemoOne from './day01';
//import Day03 from './Day03/MainDay03'
import Day04 from './Day04/Main';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DemoOne/> */}
    {/* <Day03/> */}
    <Day04/>
  </StrictMode>,
)
