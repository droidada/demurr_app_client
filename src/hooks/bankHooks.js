import client from '../utils/client';
import { useHistory } from 'react-router-dom';

export const useEditBank = () => {
  const history = useHistory();

  return []

};

export const useDeleteBank = () => {
    // const queryCache = useQueryCache()
    // return useMutation(deleteBank, {
    //   onSuccess: async () => {
    //     await queryCache.refetchQueries(['Banks'])
    //   },
    //   onError: (e) => console.log(e.message),
    // });
    return []
  };
  

export const useFetchBanks = () => {
    // return useQuery('Banks', FetchAllBanks);
    return { data: [], status: 'success'}
};
   