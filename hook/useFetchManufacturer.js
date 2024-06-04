import {useState, useEffect} from 'react'
import axios from 'axios'


const useFetchManufacturer = (id) => {
    const [manData, setManData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://dortechs.ru/api/manufacturer/${id}`);
            setManData(response.data); 
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); 

    const refetch = () =>{
        setIsLoading(false)
        fetchData()
    }

    return {manData, isLoading, error, refetch}
}

export default useFetchManufacturer