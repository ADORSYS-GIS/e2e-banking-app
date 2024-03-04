## Table of Contents

1. [PowerPay Translator](#powerpay-translator)
2. [Translation Service Backend](#translation-service-backend)
    - [Components](#components)
    - [Interactions](#interactions)
    - [Technology](#technology)
    - [Architecture](#architecture)
    - [Integration with PowerPay Service](#integration-with-powerpay-service)
    - [Error Handling](#error-handling)
    - [Deployment](#deployment)
    - [Monitoring and Logging](#monitoring-and-logging)
    - [Concrete interactions between different components](#concrete-interactions-between-different-components)
3. [Defining between component API](#defining-between-component-api)
    - [Twilio SMS Gateway API](#twilio-sms-gateway-api)
    - [Translation Service API](#translation-service-api)
    - [PowerPay Service API](#powerpay-service-api)
4. [Conclusion](#conclusion)



# PowerPay Translator

This service in the microservice architecture should get messages from the SMS gateway and send to the P.P.Service.

# Translation Service Backend

The Translation Service backend is a microservice in the PowerPay system that handles messages received from the  SMS gateway and forwards them to the PowerPay Service. The Translation Service backend is responsible for:

Receiving messages from the SMS gateway
Parsing and validating the messages
Forwarding the messages to the PowerPay Service
Handling errors and retries
Logging and monitoring
Receives requests from the P.P.Service to send someone an SMS

Responds to users who send an SMS or sends someone OTP for login

The system uses REST APIs for communication between components. The Rust application can be managed using tools like cargo (Rust's package manager) and rustfmt (for code formatting). To secure the APIs, you can use solutions like OAuth, JWT, or other authentication and authorization mechanisms.
For deployment, the application is packaged as a Docker container and deployed using a Docker Compose file to a cloud platform like GCP or AWS. Logging for the Rust app can be implemented using libraries like log and env_logger.

For continuous integration and delivery, you we use GitHub Actions or other CI/CD tools to automate the build, test, and deployment process


# Components

The Translation Service backend consists of the following components:

### SMS Gateway :

 A third-party service that sends SMS messages to the Translation Service backend.

### Translation Service:

 A Rust-based microservice that receives messages from the Twilio SMS gateway, parses and validates the messages, and forwards them to the PowerPay Service.
### PowerPay Service:



# Interactions

The Translation Service backend interacts with the following components:

### SMS Gateway:
 The Translation Service backend receives messages from the Twilio SMS gateway using the Twilio API.

### PowerPay Service:

 The Translation Service backend forwards messages to the PowerPay Service using the PowerPay API.


# Technology

The Translation Service backend is built using the following technology:

### Rust:

 A performant, reliable, and secure programming language for the backend.
### Twilio API:

 A third-party API for sending and receiving SMS messages.
### PowerPay API:

 A custom API for processing messages and performing operations in the PowerPay system.

 

# Architecture <a name="architecture"></a>

The architecture of the Translation Service backend consists of the following components:

## API Gateway:

 Receives requests from external clients and forwards them to the Translation Service backend.
## Translation Service Backend:

 Processes requests, performs translation where necessary, and forwards them to the PowerPay service.
## PowerPay Service:

 Receives translated requests from the Translation Service backend and processes them accordingly.
The Translation Service backend acts as an intermediary between the API gateway and the PowerPay service, ensuring seamless communication by translating data as required.



# Integration with PowerPay Service <a name="integration-with-powerpay-service"></a>

The Translation Service backend integrates with the PowerPay service through a series of API calls. It forwards translated requests to the appropriate endpoints within the PowerPay service, ensuring that translated data is seamlessly transmitted and processed.



# Error Handling <a name="error-handling"></a>
The Translation Service backend includes robust error handling mechanisms to address any issues that may arise during translation or communication with the PowerPay service. This includes:

### Error Detection:

 Identifying errors during translation or data transmission.
Error Reporting: Logging errors and notifying relevant stakeholders for resolution.
Fallback Mechanisms: Implementing fallback mechanisms to handle errors gracefully and maintain system stability.





# Deployment

The Translation Service backend is deployed to a cloud platform, such as GCP or AWS, for high availability and scalability. The backend is packaged as a Docker container and deployed using a Docker Compose file. The container includes all the necessary dependencies and configurations for the backend to run.

# Monitoring and Logging

The Translation Service backend includes monitoring and logging capabilities to ensure that the system is operating correctly and to diagnose and troubleshoot issues. The backend logs all requests, responses, and errors, and sends the logs to a centralized logging service for analysis and alerting. The backend also includes metrics and monitoring capabilities to track the performance and health of the system.


# Concrete interactions between different components 

The Translation Service backend interacts with the following components:

SMS Gateway: The Translation Service backend receives messages from the Twilio SMS gateway using the Twilio API detailed description cam be found here on using twilio API'S 

https://www.twilio.com/docs/messaging/api#send-messages 


. When a message is received, the Translation Service extracts the necessary information, such as the sender's phone number, the recipient's phone number, and the message content. The Translation Service then validates the message and forwards it to the PowerPay Service for further processing.
PowerPay Service: The Translation Service forwards messages to the PowerPay Service using the PowerPay API. The PowerPay Service processes the message and performs the necessary operations, such as sending money, registering users, and checking balances. Once the operation is complete, the PowerPay Service sends a response back to the Translation Service, which then forwards the response to the Twilio SMS gateway to be sent back to the user as an SMS message.
Database: The Translation Service and PowerPay Service both read and write data to the database as needed. The database stores all the necessary information for the system to operate, such as user data, transaction history, and account balances. The Translation Service and PowerPay Service use the database to persist data and to query for information that is needed to process messages and perform operations.

These interactions are illustrated in the following diagram:

````
sequenceDiagram
 SMS Gateway ->>Translation Service Backend:  / handle_message

Translation Service Backend->>PowerPay Service: POST / api / send_money

PowerPay Service-->>Translation Service Backend: POST /send_sms  (OTP)
PowerPay Service-->>PowerPay Service: verification


Translation Service Backend-->> SMS Gateway:  sms containing otp
SMS Gateway->PowerPay Service: balance checking
 SMS Gateway ->>Translation Service Backend:  / handle_message
Translation Service Backend->>PowerPay Service: GET / api / balance
PowerPay Service-->>PowerPay Service: verification

PowerPay Service-->>Translation Service Backend: GET /send_sms  

Translation Service Backend-->> SMS Gateway:  sms containing balance
````

# Defining between component API

SMS Gateway API

The  SMS Gateway API is a third-party API that is used to send and receive SMS messages. The Translation Service backend uses the API to receive messages from the Twilio SMS Gateway.

 you can refare this url for more information on the implementation. 
https://www.twilio.com/docs/glossary/what-is-sms-api-short-messaging-service



### Translation Service API
The Translation Service API is a custom API that is used to receive messages from the SMS Gateway, parse and validate the messages, and forward them to the PowerPay Service. The Translation Service API is implemented as a Rust-based microservice.


PowerPay Service API
The PowerPay Service API is a custom API that is used to process messages and perform the necessary operations, such as sending money, registering users, and checking balances. The PowerPay Service API is implemented as a microservice.


The Table below summarizes the operations on the API endpoints for the Translation Service backend:

| Endpoint | Method |Description |
|-----------------|-----------------|-----------------|
| /handle_messages  | POST   |Receive a message from the  SMS Gateway, parse and validate it, and forward it to the PowerPay Service. The request body should contain the following fields: sender (the phone number of the sender), recipient (the phone number of the recipient), and content (the content of the message).    |
| /api/sendmoney	  | POST   | Process a transfer request. The request body should contain the following fields: sender (the phone number of the sender), recipient (the phone number of the recipient), and amount (the amount of money to be sent). The PowerPay Service will process the transfer and send a response back to the Translation Service, which will then forward the response to the  SMS gateway to be sent back to the user as an SMS message.
| /api/balance	  | GET   |The PowerPay Service will process the check balance and uses the endpoitn /api/balance to send a response back to the Translation Service, which will then forward the response to the  SMS gateway to be sent back to the user as an SMS message.
| /send_sms	  | GET   |The PowerPay Service will process the check balance and send a response back to the /send_sms endpoint of the Translation Service such as the OTP , which will then forward the response to the  SMS gateway to be sent back to the user as an SMS message.
  


# Conclusion

The Translation Service backend is a critical component in the PowerPay system that enables users to send and receive money, register with the system, and check their balances. The backend is built using Rust and interact with the  SMS gateway, the PowerPay Service, and the cloud-native database. The backend is deployed to a cloud platform for high availability and scalability, and includes monitoring and logging capabilities to ensure that the system is operating correctly.
n summary, the Translation Service backend consists of three main components: the SMS Gateway, the Translation Service, and the PowerPay Service. The SMS Gateway sends SMS messages to the Translation Service, which then parses and validates the messages and forwards them to the PowerPay Service. The PowerPay Service processes the messages and sends a response back to the Translation Service, which then forwards the response to the SMS gateway to be sent back to the user as an SMS message.

The Translation Service API and the PowerPay Service API are both custom APIs that are used to facilitate communication between the components. The Translation Service API is used to receive messages from the Twilio SMS Gateway, and the PowerPay Service API is used to process the messages and perform the necessary operations.

For more information on the specific endpoints and their input formats, please refer to the Twilio SMS Gateway API documentation, the Translation Service API documentation, and the PowerPay Service API documentation.
