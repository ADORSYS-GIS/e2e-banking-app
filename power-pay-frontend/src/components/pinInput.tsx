import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const PinInput: React.FC = () => {
  const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/recipient_info');
    };
    const handleConfirmClick = () => {
        navigate('/send_money_confirmation');
    };


 
  return (
    <div className="flex justify-center items-center  mb-34  bg-800 text-black text-sm">
      <div className="">
        <div className="flex rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-4 bg-gray-100">
          <div>
            <h1 className="text-lg text-center text-red-400 pb-5">Notice!!!</h1>
            <p className="text-sm text-center text-black-400 pb-4">By entering you PIN below, you confirm that the sum of of FCFA100.50  be sent to Mr Stephane</p>
          </div>
        </div>
        <div className="input-area">
          <form className="max-w-sm mx-auto flex  rounded-lg w-80 m-auto text-lg absolute  inset-x-0">
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
          <button className="rounded-full w-80 m-auto px-4 py-2 my-16 text-white bg-red-600 hover:border-red-950 text-lg absolute  inset-x-0 bottom-12"
          onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950  text-lg absolute  inset-x-0 bottom-12"
          onClick={handleConfirmClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinInput;