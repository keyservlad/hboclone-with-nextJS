import { useEffect, useState } from "react";

export const useMounted = () => {
  const [hasMounted, setHasMouted] = useState(false);

  useEffect(() => {
    setHasMouted(true);
  }, [])
  return { hasMounted };
};
