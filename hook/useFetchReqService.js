import { useQuery } from 'react-query';
import axios from 'axios';

const fetchReqService = async (clientId) => {
  const response = await axios.get(`http://dortechs.ru/api/servicelist`);
  return response.data;
};

const useFetchReqService = (clientId) => {
  const { data, isLoading, isError, refetch } = useQuery(['reqService', clientId], () => fetchReqService(clientId));

  return { data, isLoading, isError, refetch };
};

export default useFetchReqService;
