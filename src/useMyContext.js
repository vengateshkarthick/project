import React ,{useState, useEffect} from 'react'

export function  MyContextAPI () {
    const [segment, setSegment] = useState()
    const [schema, setSchema] = useState()
    const [showOrhide, setShoworHide] = useState(false)
    const [lookupData, setLookupData] = useState([
        {
            key: 'schema',
            items: [
                {
                    id: 1,
                    description : 'First Name',
                    value: 'first_name'
                },
                {
                    id: 2,
                    description : 'Last Name',
                    value: 'last_name'
                },
                {
                    id: 3,
                    description : 'Gender',
                    value: 'gender'
                },
                {
                    id: 4,
                    description : 'Account_name',
                    value: 'account_name'
                },
                {
                    id: 5,
                    description : 'City',
                    value: 'city' 
                }
            ]
        }
    ])

    return {
        lookupData,
        segment,
        setSegment,
        schema,
        setSchema,
        showOrhide,
        setShoworHide

    }
}

export const MyContext = React.createContext()

export function MyContextProvider (props) {
    return (
        <MyContext.Provider value={MyContextAPI()}>
             {props.children}
        </MyContext.Provider>
    )
} 