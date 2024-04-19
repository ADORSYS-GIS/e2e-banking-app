import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const UserLogin: React.FC = () => {
    return (
      <div className="flex justify-center items-center  mb-34  bg-800 text-black text-sm">
        <FontAwesomeIcon icon={faUser} size="4x" className="text-center w-80 justify-center align-middle pb-9 pt-12 absolute top-3"  />
            <div className="text-lg text-center text-black-950 pt-9 font-bold font-black absolute inset-x-0 mt-12 top-12">LOG IN</div>
            <div className="input-area">
                <form className="max-w-sm mx-auto flex  rounded-lg w-80 m-auto text-lg absolute  inset-x-0">
                    <div className="flex items-center">
                        <div className="input-group">
                            <input type="number" className="text-lg px-9 rounded-full w-80 p-2.5 bg-red-50 dark:placeholder-gray-400 dark:text-black required" placeholder="Phone Number" required />
                            <FontAwesomeIcon icon={faPhone} size="1x" className="mr-2 color-red-950" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="pt-12">
                <button className="rounded-full w-80 m-auto px-4 py-2 my-16 text-white bg-blue-950 hover:border-blue-950 text-lg absolute  inset-x-0 bottom-12">
                    Confirm
                </button>
                <button className="rounded-full w-80 m-auto px-4 py-2 text-white bg-blue-950  text-lg absolute  inset-x-0 bottom-12">
                    Register
                </button>
          </div>
        </div>
    );
  };
  
  export default UserLogin;