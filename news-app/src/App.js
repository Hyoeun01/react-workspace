
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback } from 'react';

function App() {
  const [category, setCategory]=useState("all");
  const onSelect = useCallback(category => setCategory(category),[]);
  // const [data, setData] = useState(null);
  // const onClick= async() =>{
  //   try{
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a73df22dd97449da35c324fc4f2c139');
  //     setData(response.data);
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>
  )
  //  (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={50} cols={200} value={JSON.stringify(data, null, 2)} />}
  //   </div>
  // );
}

export default App;
