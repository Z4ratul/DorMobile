import {useState, useEffect} from 'react'
import axios from 'axios'


const useFetchMachinetype = (id) => {
    const [typeData, setTypeData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://192.168.0.102:80/api/machinetype/${id}`);
            setTypeData(response.data); 
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

    return {typeData, isLoading, error, refetch}
}

export default useFetchMachinetype