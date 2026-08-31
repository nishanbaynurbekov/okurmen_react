import { useState, useEffect} from 'react'
import Api from '../Component/API/Api'
import apiOkur from '../axios/Api_okur' 
import List from '../Component/list/List'
import Load from '../loader/Load' 

 

function Kana() {
  const [ use, setUse ] = useState([])
  const [loading, setLoading] = useState(true)

   async function openBooks() {
    try {
      const res = await apiOkur.get()
      console.log(res.data);
      setUse(res.data)
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
   }

  useEffect(() => {
  const fetchData = async () => {
    await openBooks();
  };
  fetchData();
}, []);
   if (loading) {
    return <Load/>
   }

  return (
    <div>
         <List/>
      <h1>Бул жер келечектеги китеп кана</h1>
      <div className='label'>
      {use.map((user) => (
       <Api key={user.id} data={user}/>
    ))}
    </div>
    </div>
  )
}

export default Kana
