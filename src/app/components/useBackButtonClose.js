import { useEffect } from 'react';

export function useBackButtonClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    // Push a dummy state when the lightbox opens
    window.history.pushState({ lightbox: true }, '');

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // If the lightbox is closed by other means (X button, ESC, backdrop click),
      // pop the dummy state so the history stays clean
      if (window.history.state?.lightbox) {
        window.history.back();
      }
    };
  }, [isOpen, onClose]);
}