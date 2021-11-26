import {
  useCallback, useRef, useState, useEffect,
} from 'react';


export default function useAsyncAction(action, dependencies) {
  const [state, setState] = useState({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const isCancelled = useRef(false);

  const perform = useCallback(() => {
    setState({ data: undefined, loading: true, error: undefined });

    (async function tryAction() {
      try {
        const data = await action();

        if (!isCancelled.current) {
          setState({ data, loading: false, error: undefined });
        }
      } catch (error) {
        if (!isCancelled.current) {
          setState({ data: undefined, loading: false, error });
        }
      }
    }());
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, dependencies);

  useEffect(() => () => {
    isCancelled.current = true;
  }, []);

  return { ...state, perform };
}
