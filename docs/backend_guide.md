# Project Overview

The Power Payment Backend is a cutting-edge system designed to facilitate seamless money transfers between users.

By offering robust security measures and scalability, the project aims to provide a hassle-free experience for users when transferring funds. The system is designed to handle a growing user base and high transaction volumes.

With its advanced technology stack and meticulous attention to detail, the Power Payment Backend sets out to meet the needs of users who value simplicity, speed, and security in their financial transactions. It serves as a reliable and efficient backend infrastructure for facilitating electronic money transfers.


# Architecture and Technologies

The backend architecture consists of several key components, including the Power Payment Service, SMS Gateway, Power Payment App, and a scalable and secure database. In the following sections, we will provide detailed explanations of each of these components.

``` mermaid
graph TB

A[Power Pay Store App] --> |Trigger Topup| B[Power Pay Service, SMS Gateway]
B --> C[Database]
D[Power Pay Payment, Power Pay Store, Power Pay Website] --> A
D --> |OAuth| E[Power Pay Payment App]
E --> |https requests| B
B --> |Notification| F[Cloud Messaging] 
F --> E
G[Tchoronko] --> |Auth Service| H[Telecom Provider]
H --> B
H --> |SMS| G
```

# System Components

1. Power Pay Service: 

This is the core of the backend which intelligently processes all requests and orchestrates the system's intricate logic. This service intuitively interacts with other components ensuring smooth and reliable communication channels.

2. Database:

The database acts as the robust repository for user data, transaction history, and account balances. Meticulously designed, the database schema ensures optimum data integrity, security, and scalability, enabling efficient storage and retrieval of critical information.

# Technologies and tools used for backend

1. GCP/AWS (Cloud Deployment):

* The Power Payment Backend can be deployed on cloud platforms such as Google Cloud Platform (GCP) or Amazon Web Services (AWS).
* These cloud platforms provide infrastructure services that enable easy provisioning, scaling, and management of the backend application.
* The backend can be deployed using cloud-native technologies like Kubernetes or serverless computing to ensure high availability, scalability, and fault tolerance.

2. Database (Cloud Native for database component):

* The database component of the Power Payment Backend can be implemented using a cloud-native database service.
* For example, on GCP, you can use Cloud Spanner, Cloud SQL, or Firestore. On AWS, you can use Amazon RDS, Amazon DynamoDB, or Amazon Aurora.
* These cloud-native databases offer managed services that handle scalability, replication, backups, and security, allowing the backend to leverage the benefits of cloud computing.

3. Java (Spring Boot for Power Pay Service):

* The Power Pay Service can be developed using Java and the Spring Boot framework.
* Spring Boot provides a simplified way to build Java applications by handling common configurations and dependencies.
* With Spring Boot, you can create RESTful APIs, handle request processing, and implement business logic for the Power Payment Backend.
* Java's robustness, scalability, and extensive ecosystem make it a suitable choice for developing the backend service.

# API Documentation

The Power Payment Backend exposes various APIs with the following endpoints:

- POST /api/users: Create a new user account. Request body should include user details.
- POST /api/transaction: Initiate a money transfer between users. Request body should include transfer details.
- GET /api/balance/{userId}: Get the balance details of a specific user by their ID.

For each endpoint, provide examples of requests and responses along with the expected request and response formats.

# Status codes to be used 

- 200 OK:

This status code indicates a successful request. It is typically returned when the API operation was completed successfully, and the requested data or action was processed without any issues.

- 201 Created:

This status code is returned when a new resource has been successfully created. It is commonly used in scenarios where a POST request is made to create a new entity, and the creation process is successful.

- 400 Bad Request:

This status code indicates that the server cannot process the request due to client error. It is typically returned when the request is malformed, missing required parameters, or contains invalid data. The accompanying error message or response body should provide more details about the specific issue.

- 401 Unauthorized:

This status code indicates that the request requires authentication or authorization credentials. It is commonly used when the client is not authenticated or does not have sufficient privileges to access the requested resource. The client may need to provide valid credentials or obtain appropriate permissions to proceed.

- 403 Forbidden:

This status code is similar to 401, but it specifically indicates that the client does not have permission to access the requested resource, regardless of authentication status. It is commonly used when the server understands the request but refuses to fulfill it due to access restrictions.

- 404 Not Found:

This status code indicates that the requested resource could not be found on the server. It is commonly used when the server cannot locate the requested endpoint or resource. This could be due to a mistyped URL, a deleted resource, or a non-existent resource identifier.

- 500 Internal Server Error:

This status code indicates that an unexpected error occurred on the server while processing the request. It is commonly used as a generic response for any unhandled or unexpected server-side errors. The accompanying error message or response body should provide more details about the specific error.

# Database Schema

The provided Entity Relationship Diagram (ERD) depicts the data model for the Power Pay system. It showcases the relationships between different entities within the system. Here's a concise explanation of the ERD:

``` mermaid
---
title: Power Pay Entity Relationship Diagram
---
erDiagram

Users ||--o{ Transactions : "SenderUserID"
Users ||--|| OTP : "userId"
Users ||--o{ UserContacts : "userId"
Users }|--o{ Transactions : "RecipientUserID"
Users ||--|| Kiosk : "userId"
Users ||--|| Store : "userId"

Users{
    int userId pk
    String phoneNumber
    String PIN
    String balance
}

Transactions{
    int transactionId pk
    Double amount
    String status
}

OTP{
    int otpId pk
    String optValue
    Date expirationDate
}

UserContacts{
    int contactId pk
    String contactName
}

Kiosk{
    int kioskId pk
    String location
    String balance
}

Store{
    int storeId pk
    String location
    String balance
}
```

1. Users: 
    
This entity represents the users of the Power Pay system. It includes attributes such as userId (primary key), phoneNumber, PIN, and balance.

2. Transactions: 

This entity captures the transactions made within the Power Pay system. It includes attributes such as transactionId (primary key), amount, and status. The relationship between Users and Transactions indicates that a user can initiate multiple transactions as a sender (SenderUserID) and receive multiple transactions as a recipient (RecipientUserID).

3. OTP: 
    
This entity represents the One-Time Passwords used for authentication. It includes attributes such as otpId (primary key), otpValue, and expirationDate. The relationship between Users and OTP indicates that a user can have just one OTP associated with their account.

4. UserContacts: 

This entity stores the contacts of a user. It includes attributes such as contactId (primary key) and contactName. The relationship between Users and UserContacts indicates that a user can have multiple contacts in their address book.

5. Kiosk: 
    
This entity represents the kiosks within the Power Pay system. It includes attributes such as kioskId (primary key), location, and balance. The relationship between Users and Kiosk indicates that a user can be associated to a single kiosk.

6. Store: 
    
This entity represents the stores within the Power Pay system. It includes attributes such as storeId (primary key), location, and balance. The relationship between Users and Store indicates that a user can be associated to a single store.

# Logical Model

A logical model abstracts away the technical implementation aspects and focuses on the conceptual understanding of the system. It helps in understanding the data requirements, relationships between entities, and the constraints that govern the data. This model serves as a blueprint for database design and forms the basis for translating the logical model into a physical model, which deals with implementation-specific details such as storage formats, indexing, and performance optimization. The logical model of the Power Pay is as follows:

- Users (userId [PK], phoneNumber, PIN, balance)
- Transactions (transactionId [PK], amount, status, SenderUserID [FK], RecipientUserID [FK])
- OTP (otpId [PK], otpValue, expirationDate, userId [FK])
- UserContacts (contactId [PK], contactName, userId [FK])
- Kiosk (kioskId [PK], location, balance, userId [FK])
- Store (storeId [PK], location, balance, userId [FK])

Note:
- [PK] : Primary Key
- [FK] : Foreign Key

# Authentication Process

The Power Payment system employs specific mechanisms and workflows for authenticating smartphone and Choronko users in the backend. This section outlines the authentication procedures while addressing security concerns and the integrity of the translator service.

1. Smartphone User Authentication:

For smartphone user authentication, the following steps are followed:

a. User Registration:

- During the registration process, smartphone users provide their phone numbers, which are stored in the user database.
- To ensure authentication requests originate from our system, we will implement IP filtering and domain whitelisting, allowing requests only from our specific domain.

b. OTP Generation and Delivery:

- Upon successful registration, the backend generates a One-Time Password (OTP) and sends it to the user's phone number via SMS.
- To ensure the security of OTP delivery, we will integrate with a trusted SMS gateway or service provider that follows industry-standard encryption protocols.

c. OTP Verification:

- The backend validates the OTP entered by the user against the one stored in the database.
- To ensure the integrity of the OTP verification process, we will implement measures such as rate limiting and session management to prevent unauthorized access and protect against brute-force attacks.

d. PIN Setup:

- After successful OTP verification, the user is prompted to set a Personal Identification Number (PIN) for subsequent authentication.
- The user's PIN will be securely stored in the user database using strong cryptographic hashing algorithms like bcrypt or Argon2, along with salting techniques to prevent unauthorized access.

2. Choronko User Authentication:
    
For Choronko user authentication, the following steps are undertaken:

a. SMS Gateway Integration:

- The backend integrates with an SMS gateway to receive and interpret messages sent by Choronko users.
- To ensure the authenticity and integrity of the SMS gateway, we will implement security measures such as encryption, secure API endpoints, and mutual authentication using secure tokens or certificates.

b. Syntax Interpretation:

- The SMS gateway extracts the phone number and PIN from the incoming message using the specified syntax, such as numberpin#.
- We will implement robust parsing and validation mechanisms to ensure the correct interpretation of the incoming messages, including input sanitization to prevent potential attacks like SQL injection or cross-site scripting (XSS).

c. PIN Verification:

- The backend verifies the received PIN against the one stored in the Choronko user's database record.
- To ensure the security of PIN verification, we will utilize secure database access patterns, strong authentication protocols, and proper error handling to prevent information leakage.

# Security Measures for the PWA and Translator Service:

Apart from authentication, we recognize the need to secure the Progressive Web App (PWA) and its interaction with the backend, as well as the security of the translator service. To address these concerns, we will:

1. Implement Secure Communication:

- Utilize secure communication protocols such as HTTPS to protect data transmission between the PWA and the backend.
- Implement proper authentication and authorization mechanisms, including token-based authentication (such as JWT) or session management, to ensure only authorized requests are processed.

2. Apply Input Validation and Sanitization:

- Employ strict input validation and sanitization techniques to prevent common security vulnerabilities such as SQL injection or cross-site scripting (XSS) attacks.
- Utilize input validation libraries and frameworks, and follow secure coding practices to sanitize and validate user inputs.

3. Employ Access Control:

- Implement access control mechanisms to restrict unauthorized access to sensitive resources and functionalities within the PWA and the translator service.
- Utilize role-based access control (RBAC) or attribute-based access control (ABAC) models to define and enforce access policies.

4. Perform Regular Security Audits:

- Conduct regular security audits and vulnerability assessments to identify and address any potential security weaknesses.
- Use security scanning tools, penetration testing, and code reviews to proactively identify and fix security vulnerabilities.

By implementing these security measures, we ensure that authentication requests originate from our system and that the translator service is not compromised or fake. Additionally, these measures address the non-technical concerns of allowing users only from our domain and protecting against hackers from different websites.

# Error Handling

Error handling is an essential aspect of any application, including the Power Payment Backend, to ensure smooth operation and a positive user experience. Proper error handling involves identifying, capturing, and appropriately responding to errors that may occur during the execution of backend processes. Below is an explanation of how error handling should be done in the backend, along with examples:

- HTTP Status Codes:

The app utilizes appropriate HTTP status codes to indicate the nature of the error, allowing clients to understand the response at a glance.

For example: Review API Documentation above for status code and explanation.

- Error Logging and Notification:

To ensure effective issue monitoring and troubleshooting, errors in the Power Payment Backend should be logged to a centralized logging system or a dedicated log file. This logging mechanism should include essential details such as timestamps, error messages, and stack traces. This enables developers and system administrators to analyze and resolve issues efficiently. Additionally, notifications or alerts can be triggered to promptly notify the relevant individuals or teams when critical errors occur. This ensures swift action can be taken to address and resolve the issues.

To acquire error logging, you can follow these steps:

1. Include the relevant logging dependencies: 
        
Spring Boot uses SLF4J as the logging facade, so we need to include the SLF4J API and a logging implementation as dependencies in our backend. For example, we can include spring-boot-starter-logging or spring-boot-starter-log4j2 for Log4j 2.

2. Configure logging properties: 
        
In the application.properties or application.yml file, specify the desired logging properties. For example, you can set the log level, log output format, and log file location. Spring Boot provides various logging properties that you can customize to meet your requirements.

3. Use logging statements in your code: 
        
Within the backend code, we will use logging statements to log errors or other relevant information. Spring Boot provides the Logger interface from the SLF4J library, which we can instantiate and use to log messages at different log levels (e.g., logger.error("Error message")).

4. Leverage AOP for detailed logging: 
        
Since Spring Boot supports Aspect-Oriented Programming (AOP), which allows us to apply cross-cutting concerns, such as logging, to specific methods or classes. We will use AOP in our backend to log detailed information like method entry, exit, and exception handling.

- Exception Handling:

Exceptions should be caught and handled appropriately using (try catch) to prevent application crashes and provide meaningful feedback to the user.

Example: If a database connection error occurs while processing a payment transaction, an exception can be caught, and the user can be informed that there was a temporary issue and to try again later.

- User-Friendly Error Messages:

Error messages should be user-friendly, informative, and provide actionable instructions or suggestions whenever possible.

Example: If a user attempts to authenticate with an incorrect PIN, they can be presented with an error message stating, "Invalid PIN. Please double-check your PIN and try again."

- Graceful Degradation:

To ensure system stability and prevent cascading failures, the Power Pay backend should implement graceful degradation. This involves handling errors in a manner that maintains system functionality and provides a satisfactory user experience. Specifically, the backend should adhere to the following principles:

1. Identify critical functionalities: 
        
Determine the core functionalities that are essential for the Power Pay system to operate effectively.

2. Implement robust error handling mechanisms: 
        
Develop comprehensive error handling mechanisms within the backend code. This includes using try-catch blocks, error logging, and structured exception handling to capture and handle potential errors or failures gracefully.

3. Define fallback mechanisms: 
        
Establish fallback mechanisms for critical functionalities that can be activated in case of errors or failures. This ensures that the system can continue to operate with reduced capabilities, providing an alternative workflow or temporarily disabling the affected feature until the underlying issue is resolved.

4. Monitor system status: 
        
Continuously monitor the health and availability of external APIs, services, and dependencies used by the backend. This allows for proactive identification of potential issues or downtime, enabling swift response and remediation.

5. Implement automated recovery mechanisms: 
        
Develop automated recovery mechanisms, such as retrying failed requests, automatically restoring failed connections, or switching to backup systems when available. These mechanisms help restore normal system functionality as soon as possible.

- Error Response Formats:

The backend should provide consistent error response formats, such as JSON or XML, that include relevant error codes, messages, and additional details for easier identification and debugging by client applications.

To provide consistent error responses in the backend:

1. Define a standard format: Establish a structured format (e.g., JSON or XML) for error responses.

2. Implement error handling middleware: Use middleware to transform errors into the standardized format.

3. Assign meaningful error codes: Use specific error codes to indicate different error scenarios.

4. Include clear messages: Provide descriptive messages that explain encountered issues.

5. Add debugging details: Include relevant information (e.g., stack traces) for easier debugging.

6. Handle missing/invalid parameters: Validate requests and return appropriate error responses.

Example: An API request that fails due to missing required parameters can return a JSON response with an appropriate error code (e.g., 400 Bad Request) and a message indicating the missing parameters.

- Input Validation and Sanitization:

Input data should be validated and sanitized to prevent common security vulnerabilities such as SQL injection or cross-site scripting (XSS) attacks. It can be done by doing the following steps:

To achieve input validation and sanitization, you can follow these steps:

1. Define Validation Rules: 
        
Determine the specific validation rules for each input field or parameter. This includes constraints such as data type, length, format, and any specific business rules that need to be enforced.

2. Implement Server-Side Validation: 
        
Perform input validation on the server-side to ensure that user-supplied data meets the defined validation rules. Use server-side programming languages and frameworks to validate and sanitize input data.

3. Use Framework Validators: 
        
Many web frameworks provide built-in validators that can be used to validate input fields. For example, in Spring Boot, you can utilize validation annotations like @NotNull, @Size, @Pattern, etc., or use the @Valid annotation along with the javax.validation API.

Example: Prior to processing a user's input for a payment amount, the backend should validate that it is a valid numeric value and sanitize it to remove any potential harmful characters.

# Testing

Testing is a critical aspect of ensuring the quality and reliability of the Power Pay Backend. This section provides guidance on the different types of tests to perform and outlines the libraries and technologies used for each type.

1. Unit Testing

To verify the functionality of individual units of code in isolation, we perform unit testing using the following libraries and technologies:

- Testing Framework: I recommend using JUnit or TestNG for writing unit tests.

- Mocking and Stubbing: Utilize libraries like Mockito or PowerMockito to isolate units being tested from their dependencies.

- Spring Boot Testing Annotations: Leverage Spring Boot's testing annotations, such as @SpringBootTest, @WebMvcTest, or @DataJpaTest, to configure the testing environment and load dependencies.

2. Integration Testing

To ensure seamless integration between different components of the Power Pay Backend, we perform integration testing, utilizing the following libraries and technologies:

- Testing Framework: I suggest using TestNG for integration testing.

- Spring Boot Testing Annotations: Utilize Spring Boot's testing annotations, such as @SpringBootTest or @WebMvcTest, to configure the integration test environment and load dependencies.

- API Testing: For testing API endpoints, consider using RestAssured or Karate.

3. Automated Testing
    
Automated testing facilitates continuous integration and helps catch regressions. We employ the following libraries and technologies for automated testing in the Power Pay Backend:

- Continuous Integration and Delivery (CI/CD): Set up a CI/CD pipeline using tools like Jenkins, GitLab CI, or CircleCI to automate the build, test, and deployment processes.

- Test Automation Frameworks: For API testing, utilize RestAssured or Karate.

- Code Coverage Analysis: Measure test coverage using tools like JaCoCo or Cobertura to ensure comprehensive testing. Analyze the coverage report to identify areas that require additional test coverage.

- Load and Performance Testing: Use tools such as Apache JMeter, Gatling, or Locust to simulate heavy loads and measure system performance.

- Security Testing: Employ tools like OWASP ZAP or Burp Suite to conduct security testing and identify vulnerabilities in the application.

4. Additional Considerations

- Test Data Management: Implement strategies for managing test data effectively, such as using tools like Flyway or DbUnit for database testing.

# Conclusion

The Power Payment Backend leverages modern and industry-leading technologies, including Spring Boot, PostgreSQL, and a RESTful API architecture. This technology stack guarantees optimum performance, scalability, and security. Rigorous testing practices, encompassing unit tests, integration tests, and end-to-end tests, ensure the system's reliability and stability. The deployment process is streamlined through a CI/CD pipeline, guaranteeing consistent and seamless deployments, backed by thorough testing.

Designed with ease of use, maintenance, and extensibility in mind, the Power Payment Backend follows a highly modular architecture. Changes made to one component have minimal impact on other components, promoting flexibility and efficiency. The system boasts exceptional scalability, effortlessly accommodating a growing user base and high request volumes. Security is a top priority, with stringent measures in place to safeguard user data and transactions, instilling confidence in the system's integrity and privacy.
