import { useQuery } from 'react-query';
import axios from 'axios';

const fetchRequests = async (PartnerId) => {
  const response = await axios.get(`http://dortechs.ru/api/request/${PartnerId ? PartnerId : 0}`);
  return response.data;
};

const useFetchRequests = (PartnerId) => {
  const { data, isLoading, isError, refetch } = useQuery(['requests', PartnerId], () => fetchRequests(PartnerId));

  return { data, isLoading, isError, refetch };
};

export default useFetchRequests;
