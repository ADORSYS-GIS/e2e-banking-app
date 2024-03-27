

//building the ok page for successful transfer
const OKPage = () => {
    return (
      <div className="flex justify-center items-center p-10 mb-34 border border-white rounded-3xl bg--500 text-white">
        <div className="card">
          <div className="ok-page">
            <h1>Success!</h1>
            <br></br>
            <p>The money was successfully transfered.</p>
          </div> 
          <div className="mt-16">
          <button className="w-96 mt-16 bg-Gray10-color rounded-3xl p-2 text-center text-white bg-green-500">OK</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default OKPage;