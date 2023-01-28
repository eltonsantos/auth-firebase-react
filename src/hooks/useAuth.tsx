import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<any>();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user: any) =>
      setCurrentUser(user)
    );
    return unSubscribe;
  }, []);
  return currentUser;
}
