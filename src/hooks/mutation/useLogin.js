import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import client, {endpoint} from '../../utils/client';
// import winston from '../../config/winston';

const UserApi = `${endpoint}/user/login`

const useLogin = ({ email, password }) => {
  const { setAuth, removeLocalToken, setError } = useContext(AuthContext);

  const mutate = async () => {
    try {
      const login = await client.post(UserApi, { email, password });
      localStorage.setItem('token', login.accessToken);
      setAuth();
    } catch (error) {
     // winston.log(error);
      setError(error.message);
      removeLocalToken();
    }
  };

  return [mutate];
};

export default useLogin;
