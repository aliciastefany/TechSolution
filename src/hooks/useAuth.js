import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser(docSnap.data());
          setPermissions(docSnap.data().permissions);
        }
      } else {
        setUser(null);
        setPermissions([]);
      }
    });

    return () => unsubscribe();
  }, []);
  
  return { user, permissions };
};

export default useAuth;
