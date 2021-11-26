import { useEffect } from 'react';
import useAsyncAction from './use-async-action';


export default function useAsync(action, ...dependencies) {
    const {
        perform, data, error, loading,
    } = useAsyncAction(action, [...dependencies, action]);

    useEffect(() => {
        perform();
    }, dependencies);

    return {
        data, error, loading, reload: perform,
    };
}
