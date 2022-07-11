import { Outlet,  Navigate} from "react-router-dom";

export default function User(){
    const isUserLogin = true

    return (
        isUserLogin ? <Outlet /> : <Navigate to="/" />
    )
}