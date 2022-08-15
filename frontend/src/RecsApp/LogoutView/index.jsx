import { logout } from "../../api/authenticate";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

const LogoutView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => navigate('/login/'))
  }, [navigate]);

  return <div>Logging you out...</div>;
};

export default LogoutView;
