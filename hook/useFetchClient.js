import { useQuery } from 'react-query';
import axios from 'axios';

const fetchClient = async (clientId) => {
  const response = await axios.get(`http://dortechs.ru/api/client/${clientId}`);
  return response.data;
};

const useFetchClient = (clientId) => {
  const { data, isLoading, isError, refetch } = useQuery(['client', clientId], () => fetchClient(clientId));

  return { data, isLoading, isError, refetch };
};

export default useFetchClient;