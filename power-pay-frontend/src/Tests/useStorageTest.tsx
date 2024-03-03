import useStorage from "../Hooks/useStorage"

// creating the constants variables which will identify the type of storage

const LocalStorage = "local";
const SessionStorage = "session";


interface UseStorageComponentProps {
  [key: string]: any;
}

const UseStorageComponent: React.FC<UseStorageComponentProps> = (props) => {
  const [local, setLocal, removeLocal] = useStorage(
    "key",
    "DefaultValue",
    LocalStorage
  );

  const [session, setSession, removeSession] = useStorage(
    "key",
    "DefaultValue",
    SessionStorage
  );


  return (
    <>
      <div>
        <button
          onClick={() => {
            setLocal("updatedLocal");
          }}
        >
          Set Local Storage Value
        </button>

        <button
          onClick={() => {
            setSession("sessionUpdated");
          }}
        >
          Set Session Storage Value
        </button>
      </div>

      <div>
        <p>Local Storage Value: {local}</p>
        <p>Session Storage Value: {session}</p>
      </div>

        <button onClick={removeLocal}>Remove Local Value</button>

        <button onClick={removeSession}>Remove Session Value</button>

    </>
  );
};

export default UseStorageComponent;
