import { useLocation, useNavigate } from 'react-router-dom';

export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    return <Child {...props} location={location} navigate={navigate} />;
  };
}
