
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import { AuthContext } from "../../context";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";


function Dashboard() {
 const { firebaseUser } = useContext(AuthContext)
    const { email } = firebaseUser || {}
    console.log(email)
    const handleSignout = () => {
        signOut(auth).then(() => {
            return <Navigate to='login' replace />
        })
    }
  return (
    <div className="p-6">
      <h1>Welcome {email}</h1>
      <button
        onClick={handleSignout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
