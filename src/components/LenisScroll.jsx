import Lenis from 'lenis';
import { useEffect } from 'react'

const LenisScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
            anchors: {
                offset: -120
            },
        });

        let animationFrameId;
        const raf = (time) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return null;
};

export default LenisScroll