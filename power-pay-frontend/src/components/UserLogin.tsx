const UserLogin: React.FC = () => {
    return (
      <div className="flex justify-center items-center  mb-34  bg-800 text-black text-sm">
            <div className="text-lg text-center text-black-950 font-bold font-black pb-5 absolute inset-x-0 top-12">LOGIN . . .</div>
            <div className="input-area">
                <form className="max-w-sm mx-auto flex  rounded-lg w-80 m-auto text-lg absolute  inset-x-0">
                    <input type="number" className="text-lg text-center   rounded-full w-80 p-2.5 bg-red-50  dark:placeholder-gray-400 dark:text-black required" placeholder="Phone Number" required />
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