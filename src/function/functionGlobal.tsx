export const ThrotlingScroll = (func: () => void, ms: number = 50) => {
    let timer: any;

    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
};