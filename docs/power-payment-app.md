# Power Payment App

## Overview

**What does it do?**

PowerPay is a mobile payment application that allows users to send and receive money, top-up their accounts, and withdraw cash. It offers a flexible payment experience by utilizing both smartphones and physical devices called Choronko.

**Who is using it?**

- PowerPay Users: Individuals with smartphones who can initiate and manage transactions through the app.
- PowerPay Kiosks: Physical kiosks that facilitate top-ups and withdrawals for users with smartphones and Choronko.
- Choronko Users: Individuals who can send and receive payments using the Choronko device without needing a smartphone.

## Technologies used

- ReactJS: Our  primary framework for building our  user interface and implementing a Progressive Web App (PWA) approach. This ensures a responsive and performant user experience across different devices.
- React Libraries: In addition to ReactJS, we'll leverage various React libraries to enhance specific functionalities of the app. These libraries might include:
1. Navigation libraries: For managing navigation between different screens and views within the app (e.g., React Router).
2. State management libraries: For handling complex application state and data flow (e.g., Redux, MobX).
- HTML and CSS: The foundation for structuring and styling the user interface elements of the PowerPay App.
- RESTful APIs: The communication protocol between the front-end (ReactJS) and the back-end server. RESTful APIs provide a standardized way to request and receive data, facilitating efficient interaction between the application layers.
- PWA Implementation: The PWA approach utilizes web technologies to deliver an app-like experience that can be installed on user devices. This might involve additional libraries or frameworks to enhance features like offline functionality and push notifications.
- HTTP Communication: RESTful APIs rely on HTTP requests and responses for communication. The back-end server will be configured to handle these requests and provide the necessary data or functionalities.


### React App Architecture:

**The PowerPay React application leverages a component-based architecture for building the user interface and managing application state. Here are the key aspects of this architecture:**

- Components: Reusable UI building blocks that encapsulate functionality and presentation. The app will likely consist of various components representing screens (registration, main screen, send money, etc.) and smaller reusable elements (buttons, forms, input fields).
- State Management: As the application complexity grows, a state management solution might be implemented to handle complex data flows and keep UI components in sync. Popular choices include Redux or MobX, which offer centralized state management for a more predictable and scalable application.
- Data Fetching: The React app will likely fetch data from backend APIs using libraries like Axios or Fetch API. This data can then be used to populate UI components and update the application state.
- Routing: A routing library like React Router will manage navigation between different screens within the app. This allows users to seamlessly switch between functionalities based on their actions.


###Deployment and Operation:

**Deploying and operating the PowerPay React app involves several steps:**

- **Build Process:** The React application code will be bundled and optimized for production using tools . This creates a production-ready build that can be deployed to a hosting environment.

- **Hosting Platform:** Several options exist for hosting the React app.
1. Cloud Platforms: Cloud providers like AWS, Azure, or Google Cloud Platform offer various hosting options like servers or containers. These provide more flexibility for complex backend integrations or specific infrastructure needs.

- **CI/CD Pipeline:** A continuous integration and continuous delivery (CI/CD) pipeline automates the build, testing, and deployment process. This ensures consistency, reduces manual errors, and allows for frequent updates with minimal downtime.

- **Monitoring and Logging:** Implementing monitoring and logging solutions helps track application performance, identify errors, and troubleshoot issues after deployment.


## Architecture and Interaction

### User Interface:
**The PowerPay mobile app offers a user-friendly interface that facilitates various financial transactions.**

**Registration screen:**

- This is the first screen users encounter. It guides them through the account creation process.
- The interface includes input fields for users to enter their full name, phone number,etc.
- A separate section allows users to create a secure PIN for account access.
- A clear "Register" button initiates the account creation process.

**see:** ![reference image](/mockups_wireframes/Registration.png)

**Main screen:**
- After a successful registration, the user is directed to the main interface which has features needed by the use to perform various transactions using the power pay app.
- This screen serves as the central hub for accessing various functionalities.
- The interface likely utilizes clear  buttons representing actions like "Send Money," "Top Up," "Withdraw," and "Check Balance."

**see:**
![reference image](/mockups_wireframes/Main_interface.png)
*The wireframe above shows how the main interface looks like and it follows by using the check balance functionality to show how it works and flow.*

For the **SendMoney** screen Interface/Procedure:
**see:**
![reference image](/mockups_wireframes/SendMoney.png)

    
For the **WithDraw Money** screen Interface/Procedure:
**see:**
![reference image](/mockups_wireframes/Withdraw_Money.png)


## User Workflow in PowerPay App
The PowerPay app streamlines various financial transactions through a user-friendly workflow. Here's how power pay users  will interact with the app's interfaces:
1. **User Registration:**
- New users launch the app and  then navigates to the registration screen.
- They enter their personal details (name, phone number) in the designated fields on screen.
- After entering details, The user is directed to a screen to enter the received OTP.
- They enter the OTP code in the designated field 
- Upon successful OTP verification, the user is now redirected to a different screen.
- The user is required to enter a pin code , these is important to ensure a secure access.
- After filling in all the required details , including the OTP and the pin, the user now clicks on the "Register" button.
- Upon succesfull registration , the app sends the registration information to the backend server for verification and for storage in the Data base and a new interface is displayed to the use which contains all the required transactions the user might want to execute(SendMoney , Top-up , Withdraw etc).

**Depending on what feature the user wants to use  present in the main interface, we have:**

 **Send Money:**
- From the main interface  users tap the "Send Money"  button.
- They are directed to the send money screen
- On the send money screen, users enter the recipient's phone number in the designated field.
- They  enter the amount in the designated field .
- A friendly message is later on displayed on the screen confirming if the use wants to send the specific amount to the recipient number  and later on the user is prompted to enter pin code for comfirmation.
- After reviewing the details on the screen , users confirm the transaction by tapping the "Send" button.

**Top Up:**
- The top-up process can be done either at the kiosk or  at the power pay store with a power pay operator.

- The user who wants to top up provides physical cash to the kiosk user or power pay operator followed by their account details.

- From the main interface , the kiosk users or power pay operator  tap the "Top Up"  button.
- They are directed to the top-up screen.
- In the top-up screen they enter the user account details(number,  amount , etc)  as specified by the user who wants to top up in the designated field.
- After entering  the amount , users confirm the top-up by tapping the "Top Up" button.

**Withdrawal:**
- These operation is either performed either at the kiosk or power pay store.
- These involve the user involve taking physical cash and amount being reducted digitally in his/her power pay app.

- From the main interface, users(kiosk user or power pay operator) tap the "withdrawal" button
- They are directed to the withdrawal screen.
- The user now put in the number and amount given to them by the user who wants to carry on the withdraw.
- If the user account balance is sufficient enough, the withdrawal process is continued followed by a message in the user's phone asking user to enter pin to confirm/initiate withdraw and also providing the amount that was withdrawed/date of withdrawal .
withdrawal is then made succesful

**Check Balance:**

- From the main interface , users tap the "Check Balance"  button.
- They are directed to the check balance screen.
- The user is requested a pin code for confirmation.
- The user's current account balance is prominently displayed on screen  for easy viewing.




## Error Handling in the PowerPay App
The PowerPay app strives to provide a smooth user experience by gracefully handling errors that might occur during communication with the back-end server. Here's how the app will address potential issues:

Types of Errors:

- Network Errors: These occur when the user's device loses internet connectivity or cannot establish a connection to the server.
- Server Errors: These can happen due to issues on the back-end server, such as high load, bugs, or maintenance.
- API Errors: Errors returned from the back-end APIs due to invalid data formats, unauthorized access attempts, or other API-specific issues.
- User Errors: Errors returned when the user mistakes in data entery orinteraction with the app's functionalities.

**Common API Errors:**
- *400 Bad Request:* This error typically indicates that the request sent by the PowerPay app to the back-end API contains invalid data or a parameter is missing.
Common causes might be missing required fields in the request body, incorrectly formatted data (e.g., wrong date format, invalid characters in names), or exceeding character limits for specific fields.

- *404 Not Found:* This error indicates that the resource (e.g., user data, transaction history) requested by the app is not found on the back-end server.
This could be due to a typo in the API endpoint URL, referencing a non-existent user ID, or temporary server issues.

- *403 Forbidden:* This error signifies that the user associated with the request is authorized but doesn't have the necessary permissions to perform the specific action.

- *500 Internal Server Error:* This generic error signifies a problem on the back-end server preventing it from fulfilling the request.
This could be due to server overload, bugs in the back-end code, or database issues.

**API Error Handling:**
1. **Graceful error display:**  Inform users without technical jargon
- For example, instead of "400 Bad Request," the app displays "There seems to be a problem with your request. Please check your information and try again."
2. **Offer Retry Options for Recoverable Errors:**
- Not all errors are permanent. Some might be caused by temporary network issues or server overload.
- The app should offer users the option to retry the action after a short delay.
- This allows users to potentially complete their task if the initial error was temporary.


**User Error Handling:**

The PowerPay app prioritizes user-friendliness by providing clear and helpful messages in case of user errors. Here are some examples:

*Invalid Phone Number:*
- If a user enters a phone number in an incorrect format (e.g., missing digits, invalid characters), the app will display a message like "Invalid phone number format. Please enter a valid 10-digit phone number."

*Missing Information:*
- In cases where a user forgets to fill in a required field (e.g., name during registration, amount during top-up), the app will display a message like "Please enter all required fields."

*Invalid Withdrawal Amount:*
- If a user tries to withdraw an amount exceeding their account balance or below the minimum allowed withdrawal limit, the app will display  a message explaining the issue.
For example, "Insufficient funds. Your current balance is not enough for this withdrawal." or "Please enter a valid amount."

*Incorrect PIN:*
- If a user enters an incorrect PIN during transaction processes, the app will limit the number of attempts to prevent unauthorized access.
- After exceeding the attempt limit, the app will prompt the user to reset their PIN or contact support.
- A generic message like "Incorrect PIN. Please try again." After exceeding attempts, a more informative message can be displayed.


##Error Handling Strategies:

- Informative Error Messages: The app  display's user-friendly error messages that clearly communicate the nature of the problem.for instance:
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
