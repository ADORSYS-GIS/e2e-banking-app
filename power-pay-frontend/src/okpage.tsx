import { border } from "@chakra-ui/react";


//faking the API 






//building the ok page for successful transfer
const OKPage = () => {
  return (
    <div className="card">
      <div className="ok-page">
        <h1>Success!</h1>
        <br></br>
        <p>The money was successfully transfered.</p>
        <br></br>
      </div> 
      <button className ="okbtn">OK</button>
    </div>
  );
};

export default OKPage;