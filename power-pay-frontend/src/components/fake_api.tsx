import axios, { AxiosError, AxiosResponse } from 'axios';

export interface ApiResponse {
  phone: string;
  amount: string;
}

export interface ErrorResponse {
  message: string;
}

const FakeApi = () => {
  const baseURL = 'http://localhost:5000';
  const api = axios.create({
    baseURL,
    timeout: 5000,
  });

  const mockSend_MoneyAPI = async (
    recipientPhoneNumber: string,
    amount: number
  ): Promise<ApiResponse | undefined> => {
    try {
      if (!recipientPhoneNumber || !amount) {
        throw new Error("Please fill in all fields");
      }

      const response: AxiosResponse<ApiResponse> = await api.post('/UserInfo', {
        recipientPhoneNumber,
        amount,
      });

      console.log("Transaction Successful");
      console.log("Recipient Phone Number:", recipientPhoneNumber);
      console.log("Amount:", amount);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          // Server returned an error response
          console.log(axiosError.response.data.message || "An error occurred while processing the transaction.");
        } else if (axiosError.request) {
          // No response received, possibly due to network issues
          console.log("Network error. Please check your internet connection.");
        } else {
          // Something else went wrong
          console.log("An error occurred while processing the transaction.");
        }
      } else {
        // Non-Axios errors
        console.log("An error occurred while processing the transaction.");
      }
    }
  };

  return mockSend_MoneyAPI; // Return the function directly
};

export default FakeApi;
