import {useState, useEffect} from 'react'
import axios from 'axios'


const useFetchVIN = (VINNumber) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    

    const fetchData = async () => {
        try{
            setIsLoading(true)
            const response = await axios.get(`http://192.168.0.102:80/api/machine/${VINNumber}`)
            setData(response.data)
            setIsLoading(false)
        }catch (error){
            setError(error)
            console.log(error)
        }finally{
            setIsLoading(false)
        }

    }

    useEffect(()=>{
        fetchData()
    }, [])

    const refetch = () =>{
        setIsLoading(false)
        fetchData()
    }

    return {data, isLoading, error, refetch}
}

export default useFetchVIN