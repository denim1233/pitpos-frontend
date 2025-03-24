import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: 1, name: 'John Doe' };
    const token = 'fake-jwt-token';

    dispatch(login({ user, token }));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
