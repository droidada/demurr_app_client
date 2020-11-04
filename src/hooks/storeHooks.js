import client from '../utils/client';
import { useHistory } from 'react-router-dom';

export const useEditStore = () => {
  const history = useHistory();

  return []

};

export const useDeleteStore = () => {
    // const queryCache = useQueryCache()
    // return useMutation(deleteStore, {
    //   onSuccess: async () => {
    //     await queryCache.refetchQueries(['stores'])
    //   },
    //   onError: (e) => console.log(e.message),
    // });
    return []
  };
  

export const useFetchStores = () => {
    // return useQuery('stores', FetchAllStores);
    return { data: [], status: 'success'}
};
   