/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
    //@ts-expect-error fix error
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<F>): Promise<ReturnType<F>> => {
        clearTimeout(timeout);
        return new Promise((resolve) => (timeout = setTimeout(() => resolve(func(...args)), waitFor)));
    };
}

export default debounce;