import { createContext, useEffect, useState } from "react";

import { auth } from "../../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseUser(user)
                setLoading(false)
                // ...
            } else {
                setFirebaseUser(null)
                setLoading(false)
                
            }
        });

        return unsubscribe
    }, [])


    return (
        <AuthContext.Provider value={{ firebaseUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };