import { useEffect, useState } from 'react';

export function useCountUp(end: number, start = 0, duration = 2000) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(start + percentage * (end - start)));
            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, start, duration]);

    return count;
}
