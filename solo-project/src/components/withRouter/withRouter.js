import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const params = useParams();

    return <Component params={params} history={history} {...props} />;
  };

  return Wrapper;
};