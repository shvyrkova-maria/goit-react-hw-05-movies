import { Toaster } from 'react-hot-toast';

function Toast() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: '1px solid var(--main-color)',
          padding: '14px',
          color: '#212121',
        },
      }}
    />
  );
}

export default Toast;
