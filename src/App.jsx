import './App.css';
import Header from './Header';
import Footer from './Footer.jsx';
import Page_button from './page_button';
import { useState } from 'react';
import PrimeNumber from './PrimeNumber';
function App() {
  const [num, setNum] = useState(0);  
  return (
    <div className="App">
      <Header />
      <div className="MyContent">
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม</button>
        <button onClick={()=>setNum(num-1)}>ลด</button>
      </div>
     
      <Page_button/>
      <Footer />
      <PrimeNumber/>
    </div>
  );
}

export default App;