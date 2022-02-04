import react, { useContext } from 'react'
import { MyContextProvider, MyContext } from './useMyContext'
import './style.css'
export default () => {
    return (
    <MyContextProvider>
        <div className='flex flex-column'>
            <div className='navitem p-4'>
                <Navbar item={'View Audience'}/>
            </div>
           
            <div
                className='sgpage p-4'
            >
                <button 
                  className='btn btn-outline-light white'
                >
                    Save segment
                </button>
            </div>
            
        </div>
    </MyContextProvider>
    )
}


function Navbar ({item}) {
    
    return (
        <div>
            {item}     
        </div>
    )
}

function Segment () {
    const {
        schema,
        setSchema
    } = useContext(MyContext)

    return  (
        <span>
            <label>
                <input
                    className='ui input'
                    type='text'
                    placeholder='Name of the segment'
                    value={schema}
                    onChange={(e) => setSchema(e.target.value)}
                
                />
            </label>
        </span>
    )
}


