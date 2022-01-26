import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [lang, setLang] = useState('en');
  const [load , setLoad] = useState(false);

  const getData = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${search}`)
    const data = await res.json()
    setResults(data)
    console.log(data)
    setLoad(true)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getData()
    setLoad(true)
  }

  const handleLanguage = () => {
    if (lang === 'en') {
      setLang('es')
    } else {
      setLang('en')
    }
  }

  const words = results.map(item => (
    item.meanings.map(itm => (
      itm.definitions.map(list => (
        <li className='list-none mx-2 my-8 p-6 border-2 border-gray-400' key={list.definition}>
          <h3 className='text-xl'>{list.definition.charAt(0).toUpperCase() + list.definition.slice(1)}</h3>
          <p style={{display: list.example ? "inline-block" : "none"}}>
            <strong>
              {lang === 'en' ? "Example: " : "Ejemplo: "}
            </strong> 
            {list.example}
          </p>
        </li>
      ))
    ))
  ))

  return (
    <div className="text-center h-full p-8 text-gray-200 bg-blue-600 dark:bg-slate-900 flex flex-col justify-around items-center">
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl text-white p-8'>📖My Dictionary</h1>
          <h3 className='text-xl text-slate-50 pb-4'>Select your language: </h3>
        <div className='pb-4'>
          <Button text='EN' onClick={handleLanguage} />
          <Button text='ES' onClick={handleLanguage} />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Input search={search} setSearch={setSearch} word={lang === 'en' ? "Search" : "Buscar"} />
          <Button text="Search" onClick={handleSubmit} />
        </div>
        <ul>
          {words}
        </ul>
        <span>{load}</span>
      </form>
    </div>
  );
}

export default App;
