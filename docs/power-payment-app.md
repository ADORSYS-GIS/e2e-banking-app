# Power Payment App

## Overview

**What does it do?**

PowerPay is a mobile payment application that allows users to send and receive money, top-up their accounts, and withdraw cash. It offers a flexible payment experience by utilizing both smartphones and physical devices called Choronko.

**Who is using it?**

- PowerPay Users: Individuals with smartphones who can initiate and manage transactions through the app.
- PowerPay Kiosks: Physical kiosks that facilitate top-ups and withdrawals for users with smartphones and Choronko.
- Choronko Users: Individuals who can send and receive payments using the Choronko device without needing a smartphone.

## Technologies used

- ReactJS for building the user interface and implementing a Progressive Web App (PWA) approach.
- HTML and CSS for the structure and styling of the user interface.
- RESTful APIs for communication with the backend server.

## Architecture and Interaction

### User Interface:

- **Registration Process**: The registration process is a series of steps that allows users to create an account and access the payment app's features. The steps typically include:

    1. **Step 1 - Personal Information**: Users enter their personal details, such as name, phone number etc. This information is necessary for account creation and verification.

    2. **Step 2 - Pin Setup**: Users set up a secure pin to protect their account. The pin should meet specific criteria, such as minimum length of numbers etc.

    3. **Step 3 - OTP Confirmation**: Once users have entered their information, set up a pin, they are provide with an OTP in which they now confirm their account for security measures.

    4. **Step 4 - Confirmation**: Once users have entered their information, set up a pin, etc . they can proceed to complete the registration process. The "Register" button is clicked to finalize the registration.

    **note:** **The above registration method is for a smartphone user.**
    **See mockup:** ![reference image](/mockups_wireframes/Registration_process.png)


- **Registartion process for a choronko user**:As a choronko user who wants to register, all you need to do is :

1. **Step 1 - Initiating Registration**: The choronko user can initiate the registration process by calling the powerpay service and then providing  their personal information such as full name , phone number etc.

2. **Step 2 -  Mobile Number Verification**:After collecting the user's mobile number, the Choronko registration system will initiate a verification step. This will be done by sending an OTP (One-Time Password) to the user's mobile number via SMS.

3. **Step 3 -  OTP Verification**:The Choronko user will be prompted to enter the OTP or verification code received via SMS. The system will validate the code to ensure the mobile number is associated with the user and proceed to the next step upon successful verification.

4. **Step 4 -  Setting a Personal Identification Number (PIN)**: For security purposes, the Choronko user will be prompted to set a PIN .The system will guide the user through the process of setting a secure PIN following specific requirements.

5. **Step 5 -  Completing Registration**: Once the user has set their PIN, the registration process for the Choronko user is considered complete. The system will store the user's information and PIN securely in the backend, associating it with the user's mobile number.



## User Workflow

The typical user workflow in the Power Payment App involves the following steps:

- **Registration:** A potential user can register with the Power Payment App using either a smartphone or a Choronko device. The user provides necessary information and follows the registration process facilitated by the frontend client. The registration data is securely sent to the backend server for storage.

- **Account Top-Up:** Once registered, a PowerPay user can top up their PowerPay account. This can be done at a PowerPay kiosk or store by following the relevant user story steps. The user interacts with the frontend client to initiate the top-up process, which involves communication with the backend server and potentially integrating with external payment gateways.

- **Sending Money:** A PowerPay user can send money to another PowerPay user using either a smartphone or a Choronko device. The user initiates the transaction through the frontend client, providing the recipient's details and the desired amount. The backend server processes the transaction, deducts the amount from the sender's account, and updates the recipient's account accordingly.

- **Withdrawing Money:** PowerPay users can withdraw money from their PowerPay accounts using either a smartphone or a Choronko device. The user initiates the withdrawal process through the frontend client, specifying the withdrawal amount and the preferred withdrawal method (e.g., PowerPay kiosk). The backend server processes the request, deducts the amount from the user's account, and facilitates the withdrawal through the appropriate channel.

- **Checking Balance:**  PowerPay users can conveniently check their account balance at any time.  Here's how this works:

1. **User Initiates Check:** The user opens the PowerPay app and navigates to the designated section for checking their balance (e.g., "check balance interface").
2. **Front-End Request:** The app sends a request through the API to the backend server specifically designed to retrieve the user's account balance.
3. **Back-End Processing:** The backend server authenticates the user and retrieves the latest balance information from the user database.
4. **Response to App:** The backend server sends a response back to the app containing the user's current account balance.
5. **Balance Display:** The app receives the response and updates the user interface to display the retrieved balance information.


**see mockup**:
![reference image](/mockups_wireframes/User_flow_interface.png) 
![reference image](/mockups_wireframes/Transactions.png)


## Error Handling in the PowerPay App
The PowerPay app strives to provide a smooth user experience by gracefully handling errors that might occur during communication with the back-end server. Here's how the app will address potential issues:

Types of Errors:

- Network Errors: These occur when the user's device loses internet connectivity or cannot establish a connection to the server.
- Server Errors: These can happen due to issues on the back-end server, such as high load, bugs, or maintenance.
- API Errors: Errors returned from the back-end APIs due to invalid data formats, unauthorized access attempts, or other API-specific issues.

##Error Handling Strategies:

- Informative Error Messages: The app will display user-friendly error messages that clearly communicate the nature of the problem.for instance:
"Network Error: Please check your internet connection and try again."
"Server Error: We're currently experiencing technical difficulties. Please try again later."
"Invalid Input: Please enter a valid phone number." (for API errors related to user input)

## Error Location:

These error handling mechanisms will be implemented in several key locations within the user flow:

- User Interface (UI) Layer: When the app encounters an error during data fetching or API calls from the UI, it will trigger the error handling logic. This could be during functionalities like:
- Registration: Network errors might prevent successful Registration attempts.
- Top-up: Server errors could interrupt the top-up process.
- Sending Money: API errors might occur due to invalid recipient information.
- Balance Check: Network errors could prevent retrieving the latest balance.

## API and Backend Communication:

**API (Application Programming Interface):**

- An API serves as a communication bridge between the frontend and backend of an application.
- The Power Pay app utilizes APIs to send requests from the frontend to the backend and receive responses containing the requested data or actions to be performed.
- The API endpoints define specific routes or URLs that the frontend can access to interact with the backend services.
- The API endpoints may include functionalities such as user registration, transaction initiation, and transaction status retrieval.

## Backend Communication:

- The frontend of the Power Pay app communicates with the backend through HTTP(S) requests.
- When a user performs an action, such as initiating a transaction(Top-up account, withdrawal , send money or check balance etc ), the frontend sends an HTTP request to the corresponding API endpoint on the backend.
- The backend receives the request, processes it, and interacts with various data sources to fulfill the request.
- The backend may communicate with databases, external services (such as SMS gateways), or other backend systems to gather or update the required data.
- The backend may also perform necessary validations, business logic execution, and security checks before responding to the frontend.

##Data Sources:

**The backend of the Power Pay app interacts with different data sources to retrieve or update data.**
- User data: The backend accesses user-related data,  account information, and transaction history, from a user database.
- Transaction data: The backend stores transaction-related data, such as transaction IDs, amounts, and statuses, in a transaction database.
- SMS gateway: The backend may use an SMS gateway service to send SMS notifications or OTPs to users during the transaction process.
