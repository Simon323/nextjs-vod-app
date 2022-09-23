import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Subscription } from "../typings";

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;

    setSubscription({});
  }, [user]);

  return subscription;
}

export default useSubscription;
