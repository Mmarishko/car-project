import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvader({ children }) {
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// export default React.memo(AuthProvader);
export default AuthProvader;