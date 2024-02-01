import React, { useEffect, useState } from 'react';
import { fetchdata } from '../src/utils/api'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Card_summary } from './components/Card_summary';
import { Ticket } from './components/Ticket';

function App() {
  const [data, setData] = useState(null);
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetchdata();
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {  
    fetchDataFromAPI();
  }, []);

  useEffect(() => {// Log the updated state
  }, [data]);
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/summary/:id' element={<Card_summary data={data} />}></Route>
        <Route path='/' element={<Home data={data}/>}></Route>
        <Route path='/bookTicket/:id' element={<Ticket data={data} />}></Route>
        
      </Routes>
      
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
