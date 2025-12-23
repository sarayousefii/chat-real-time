import { useEffect, useRef } from "react";

export const useAutoScroll = (deps) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [deps]);

  return ref;
};
