import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import client, {endpoint} from '../../utils/client';
// import winston from '../../config/winston';

const UserApi = `${endpoint}/user/login`

const useLogin = async ({ email, password }) => {
  const { setAuth, removeLocalToken, setError } = useContext(AuthContext);

    try {
      const login = await client.post(UserApi, { email, password });
      localStorage.setItem('token', login.accessToken);
      setAuth();
    } catch (error) {
     // winston.log(error);
      setError(error);
      removeLocalToken();
    }

};

export default useLogin;
