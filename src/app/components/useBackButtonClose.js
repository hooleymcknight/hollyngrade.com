import { useEffect } from 'react';

export function useBackButtonClose(isOpen, onClose, paramsToClear) {
    useEffect(() => {
        if (!isOpen) return;

        const originalUrl = window.location.href;
        const needToClear = paramsToClear?.length ? paramsToClear.some(p => originalUrl.split('?')[1]?.includes(p)) : false;

        if (needToClear) {
            const cleanUrl = new URL(originalUrl);
            paramsToClear.forEach((p) => cleanUrl.searchParams.delete(p));
            // Rewrite the entry we'll go back to so it's clean...
            window.history.replaceState(window.history.state, '', cleanUrl.toString());
            // ...then push the dummy with the original URL so the address bar still
            // shows ?photo=X while the lightbox is open.
            window.history.pushState({ lightbox: true }, '', originalUrl);
        }
        else {
            window.history.pushState({ lightbox: true }, '');
        }

        const handlePopState = () => onClose();
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            if (window.history.state?.lightbox) {
                window.history.back();
            }
        };
    }, [isOpen, paramsToClear]);
}