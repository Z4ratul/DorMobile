import { useQuery } from 'react-query';
import axios from 'axios';

const fetchServiceId = async (id) => {
  const response = await axios.get(`http://192.168.0.102:80/api/servicelist/${id}`);
  return response.data;
};

const useFetchServiceId = (id) => {
  const { data, isLoading, isError, refetch } = useQuery(['id', id], () => fetchServiceId(id));

  return { data, isLoading, isError, refetch };
};

export default useFetchServiceId;
