const Modal = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900'>
      <div className='bg-white rounded-lg p-8 max-w-md'>
        <p className='text-center mb-4'>
          This app is for desktop use only.
        </p>
        <br />
        <p>Please try again on a desktop device.</p>
      </div>
    </div>
  );
};

export default Modal;
