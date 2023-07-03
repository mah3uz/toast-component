import React from "react";
import useKeyDown from "../../utils/hooks/use-keydown";

export const ToastContext = React.createContext(undefined);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ]);
  }

  function dismissToast(toastId) {
    const nextToast = toasts.filter((toast) => {
      return toast.id !== toastId;
    })

    setToasts(nextToast)
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, [])

  useKeyDown('Escape', handleEscape);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
