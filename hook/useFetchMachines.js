import { useQuery } from 'react-query';
import axios from 'axios';

const fetchMachines = async (PartnerId) => {
  const response = await axios.get(`http://192.168.0.102:80/api/machine/partner/${PartnerId}`);
  return response.data;
};

const useFetchMachines = (PartnerId) => {
  const { data, isLoading, isError, refetch } = useQuery(['machines', PartnerId], () => fetchMachines(PartnerId));

  return { data, isLoading, isError, refetch };
};

export default useFetchMachines;