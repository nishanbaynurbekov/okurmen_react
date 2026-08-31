import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiOkur from '../axios/Api_okur'
import Api from '../Component/API/Api'
import List from '../Component/list/List'
import Input from '../Component/UI/Input'
import Load from '../loader/Load'

function Search() {

    const [ loading, setLoading ] = useState(true)
    const [ books, setBooks ] = useState([])
    const { text } = useParams()
    async function moreBooks() {
        try {
            const res = await apiOkur.get("")            
            setBooks(res.data)
            console.log(res.data);
            setLoading(false)
            
        } catch (error) {
            console.log(error.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        moreBooks()
    }, [])

    const filteredBooks = books.filter((book) => {
     return   book.name?.toLowerCase().includes((text || "") .toLowerCase().trim())
    })

   if (loading) {
        return <Load/>
    }

    if(filteredBooks.length == 0){
        return <div><h1>Мындай китеп табылган жок!</h1>
        <Input/>
        <List/></div>
    }

  return (
 <div style={{
    marginTop: "100px",
 }}>
        <List/>
         <Input/>
     <div className='label'>
{ filteredBooks.map((item) => (
    <Api key={item.id} data={item}/>
))}
    </div>
 </div>
  )
}

export default Search
