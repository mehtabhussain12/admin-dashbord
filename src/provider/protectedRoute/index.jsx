import { useContext } from "react"

import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/context"

export default function ProtectedRoute({ children }) {
    const { firebaseUser , loading } = useContext(AuthContext)
    const { uid } = firebaseUser || {}
    console.log(loading,uid)
    
    if (loading) {
        return <div>Loading....</div>
    } 
    return (
        uid ? <>{children}</> : <Navigate to='/login' replace />
    )
}