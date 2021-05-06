import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    function handleChange (q) {
    setText (q)
    getQuery(q)

    }

    return (
        <section className='search'>
            <form>
                <input type='text' 
                className='form-control' 
                placeholder='Search Characters'
                value={text}
                onChange={(e) => handleChange(e.target.value)} 
                autoFocus />
            </form>
            
        </section>
    )
}

export default Search
