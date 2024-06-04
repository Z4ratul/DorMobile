import { useQuery } from 'react-query';
import axios from 'axios';

const fetchActiveReq = async (PartnerId) => {
  const response = await axios.get(`http://192.168.0.102:80/api/request/active/${PartnerId}`);
  return response.data;
};

const useFetchActiveReq = (PartnerId) => {
  const { data, isLoading, isError, refetch } = useQuery(['activeReq', PartnerId], () => fetchActiveReq(PartnerId));

  return { data, isLoading, isError, refetch };
};

export default useFetchActiveReq;