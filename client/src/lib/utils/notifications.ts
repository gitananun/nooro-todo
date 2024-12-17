import toast from 'react-hot-toast';

interface INotification {
  message?: string;
}

export const showSuccessNotif = (message: string) => toast.success(message);
export const showEmojiNotif = (message: string) => toast.success(message, { icon: '👋' });
export const showLoadingNotif = (message: string, id?: string) => toast.loading(message, { id });
export const dismissNotif = (id: string) => toast.dismiss(id);
export const showErrorNotif = (args: INotification) => {
  const message = args.message;
  toast.error(message ?? 'Something went wrong');
};
export const showInfoNotif = (message: string) => toast(message);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showPromiseNotif = (promise: Promise<any>, message: string, success: string, error?: string) => {
  return toast.promise(promise, {
    loading: message,
    success: success,
    error: error ?? 'dsads',
  });
};
