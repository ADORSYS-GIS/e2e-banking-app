# Power Payment App

## Overview

**The Power Pay app is a mobile payment solution that enables users to send and receive money conveniently using their smartphones or Choronko devices. It also provides features such as account balance checking, topping up the PowerPay account at kiosks or stores, and withdrawing money from the PowerPay account.**

## Architecture

*The Power Payment App follows a client-server architecture, with a backend server handling the core business logic and a frontend client providing the user interface. The system consists of the following components:*

- Frontend Client: This component is responsible for rendering the user interface and facilitating user interactions. It is built using ReactJS and implements a Progressive Web App (PWA) approach for delivering a mobile-friendly and app-like experience on smartphones.

- Backend Server: The backend server is developed using Java with the Spring Boot framework. It handles the business logic, data processing, and integration with external components. The server exposes APIs for communication with the frontend client and other external services.

- Cloud-based Database: User and transaction data are stored in a cloud-based database, providing scalability, reliability, and easy access. The specific database technology used can be determined based on requirements, such as PostgreSQL or MongoDB.

- External Payment Gateways: The Power Payment App integrates with external payment gateways to facilitate money transfers between PowerPay users. The integration involves communication protocols and data formats specific to the chosen payment gateway(s).

- User Authentication Service: To ensure secure access and user identity verification, the app integrates with a user authentication service. This service handles user registration , pin infor , OTP , ensuring secure access to the Power Payment App.

## User Workflow


*The typical user workflow in the Power Payment App involves the following steps:*

- Registration: A potential user can register with the Power Payment App using either a smartphone or a Choronko device. The user provides necessary information and follows the registration process facilitated by the frontend client. The registration data is securely sent to the backend server for storage.

- Account Top-Up: Once registered , a PowerPay user can top up their PowerPay account. This can be done at a PowerPay kiosk or store by following the relevant user story steps. The user interacts with the frontend client to initiate the top-up process, which involves communication with the backend server and potentially integrating with external payment gateways.

- Sending Money: A PowerPay user can send money to another PowerPay user using either a smartphone or a Choronko device. The user initiates the transaction through the frontend client, providing the recipient's details and the desired amount. The backend server processes the transaction, deducts the amount from the sender's account, and updates the recipient's account accordingly.

- Withdrawing Money: PowerPay users can withdraw money from their PowerPay accounts using either a smartphone or a Choronko device. The user initiates the withdrawal process through the frontend client, specifying the withdrawal amount and the preferred withdrawal method (e.g., PowerPay kiosk). The backend server processes the request, deducts the amount from the user's account, and facilitates the withdrawal through the appropriate channel.


## Integration with Other Components

*The Power Payment App integrates with various external components to enhance its functionality. These integrations include:*

- External Payment Gateways: The app integrates with one or more external payment gateways to facilitate secure and reliable money transfers between PowerPay users. The integration involves implementing communication protocols and data formats specific to each payment gateway.

- User Authentication Service: The Power Payment App integrates with a user authentication service to ensure secure access and user identity verification. The integration includes communication protocols for user registration,and authentication processes.

- Backend APIs: The backend server exposes APIs that allow communication with other components, such as the frontend client, external payment gateways, and user authentication service. These APIs follow standard protocols (e.g., RESTful APIs) and use data formats like JSON for seamless integration.




## Technologies Used

*The Power Pay app utilizes the following technologies:*

- Java (Spring Boot) for the backend development.
- ReactJS for the frontend development, providing a responsive and dynamic user interface.
- Progressive Web App (PWA) technology for delivering an app-like experience on smartphones.
- Cloud deployment for hosting and scaling the application.
- Cloud-based database storage for storing user and transaction data.