import React, {useState, useEffect} from "react";
import axios from 'axios'
import Header from './components/Ui/Header'
import Search from './components/Ui/Search'
import Characters from './components/Characters/Characters'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')

useEffect(() => {
  const fetchItems = async () => {
   const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


   //console.log(result.data)
   
   setItems(result.data)
   setisLoading(false)
  }


  fetchItems();
}, [query])

  return (
    <div className="container">
     <Header />
     <Search getQuery={(q) => setQuery(q)} />
     <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
