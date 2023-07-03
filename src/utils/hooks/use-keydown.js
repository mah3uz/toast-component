import React from 'react';

export default function useKeyDown(key, callback) {
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === key) {
        callback(event);
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [key, callback])
}
