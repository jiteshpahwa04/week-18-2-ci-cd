"use client";

import { useBalance } from "@jiteshpahwa/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}