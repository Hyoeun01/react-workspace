
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick= async() =>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=0a73df22dd97449da35c324fc4f2c139');
      setData(response.data);
    } catch(e) {
      console.error(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={20} cols={200} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
