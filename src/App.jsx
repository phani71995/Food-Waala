
import LandingPage from './pages/LandingPage'
import { createContext, useEffect, useState } from "react";
import { API_URL } from './components/ApiUrl'
import Getdata from './components/ApiData';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Added imports
import Product from "./components/Product";

export const context = createContext();
function App() {
  const [vendorsData, setvendorsData] = useState([]);


  useEffect(() => {

    async function fetchData() {
      try {
        const data = await Getdata(`${API_URL}/vendor/all-vendors`);


        setvendorsData(data.vendors);
        console.log(data.vendors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }




    fetchData(); // Call the async function here

  }, []);

  return (

    <>
      <context.Provider value={vendorsData}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:frim/products" element={<Product />} />
        </Routes>
      </context.Provider>
    </>

  );
}

export default App;