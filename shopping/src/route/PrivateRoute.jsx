import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";


const PrivateRoute = ({authenticate}) => {

    return authenticate == true ? <Detail/> : <Navigate to='/login' />
    
    
}

export default PrivateRoute;