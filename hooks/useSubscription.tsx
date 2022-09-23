import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Subscription } from "../typings";

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;

    setSubscription({ created: "Sat Sep 24 2022 00:23:25 GMT+0200" });
  }, [user]);

  return subscription;
}

export default useSubscription;
