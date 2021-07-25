import { Toaster } from 'react-hot-toast';

function Toast() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{ top: 80 }}
      toastOptions={{
        style: {
          border: '1px solid #3f51b5',
          padding: '12px',
          color: '#212121',
        },
      }}
    />
  );
}

export default Toast;
