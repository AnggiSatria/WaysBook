import { Outlet,  Navigate} from "react-router-dom";

export default function PrivateRouteAdmin() {
    const isAdminLogin = true

    return (
        isAdminLogin ? <Outlet /> : <Navigate to="/" />
    )
}
