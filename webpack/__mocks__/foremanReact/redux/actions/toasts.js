export const addToast = toast => ({
  type: 'TOASTS_ADD',
  payload: {
    message: toast,
  },
});
