import { useEffect, useState } from "react";

import { auth } from "../../utils/firebase";

export default function Authorization() {
  const [user, setUser] = useState(null);
  
   useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return {
    isAuthenticated: Boolean(user),
    email: user?.email.split('@')[0],
  };
}

