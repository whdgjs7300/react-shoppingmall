import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";


const PrivateRoute = () => {
    const authenticate = useSelector(state=>state.auth.authenticate)

    return authenticate == true ? <Detail/> : <Navigate to='/login' />
    
    
}

export default PrivateRoute;