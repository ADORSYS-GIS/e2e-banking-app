import { useNavigate } from 'react-router-dom';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PinInput_For_Balance: React.FC = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/home');
  };
  const handleConfirmClick = () => {
    navigate('/balance');
  };

  return (
    <div className="flex justify-center items-center mb-34 bg-800 text-black text-sm">
      <div className="">
        <div className="input-area">
          <form className="max-w-sm mx-auto flex rounded-lg w-80 m-auto text-lg absolute inset-x-0">
            <div className="input-group">
                <input
                type="password"
                maxLength={4}
                id="number-input"
                className="text-lg text-center rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter PIN"
                required
                />
                <FontAwesomeIcon
                icon={faLock}
                size="1x"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600"
                />
            </div>
          </form>
        </div>
        <div className="pt-12">
          <button
            className="rounded-full w-80 m-auto px-4 py-2 text-white bg-red-600 text-lg absolute inset-x-0 bottom-20"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950 text-lg absolute inset-x-0 bottom-6"
            onClick={handleConfirmClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinInput_For_Balance;