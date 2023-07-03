import React from 'react';

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === 'Escape') {
        callback(event);
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [callback])
}
