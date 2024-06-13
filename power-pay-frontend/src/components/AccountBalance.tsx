import { useNavigate } from 'react-router-dom';
  
    const AccountBalance: React.FC = () => {
        const navigate = useNavigate();

    const handleOkClick = () => {
        navigate('/home');
    };
    // success message to be displayed on the screen
  
    return (
      <div className="flex justify-center items-center  mb-34 bg-800 text-black text-sm">
        <div className="">
          <div className="rounded-lg w-80 m-auto px-4 py-2  text-lg absolute  inset-x-0 top-12 mt-12 bg-gray-100">
            <div className="pt-12 pb-12">
              <h1 className="text-2xl font-bold pb-10">Account Balance.</h1>
              <p className="text-md">Balance: $Balance</p>
            </div>
          </div>
          <div className="pt-12">
            <button className="rounded-full bg-blue-950 hover:bg-blue-900 w-80 m-auto px-4 py-2 text-white text-lg absolute  inset-x-0 bottom-12" 
            onClick={handleOkClick}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AccountBalance;