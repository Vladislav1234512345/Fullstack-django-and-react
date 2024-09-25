import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "http://127.0.0.1:8000/api/students";

  useEffect(() => {
    setIsLoading(true);
    axios.get(API_URL)
    .then(res => setStudents(res.data))
    .catch(err => setError(err.message))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
    <h1>Список студентов</h1>
    {
      isLoading 
      ? <h1>Идёт загрузка...</h1> 
      : students.map(stud => <div key={stud.pk}><h2>{stud.pk}. {stud.name}</h2><hr /></div>)
    }
    {error.length != 0 && <h2>{error}</h2>}
    </>
  )
}

export default App
