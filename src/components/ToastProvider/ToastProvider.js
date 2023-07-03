import React from "react";

export const ToastContext = React.createContext();

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

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
