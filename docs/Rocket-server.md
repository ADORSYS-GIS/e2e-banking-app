
Rust Rocket Server with Serde Integration

Overview:
This Rust project integrates a base server using the Rocket framework and implements support for serialization and deserialization with Serde, serde_json, and serde_derive. The primary objective is to establish a robust backend foundation for efficient data handling.

Setup:

    Dependencies:
        Ensure Rocket, serde, serde_json, and serde_derive are added to the Cargo.toml file.

    Configuration:
        Create a main.rs file and set up a basic Rocket server to handle incoming HTTP requests.
        Implement an index endpoint for testing purposes.

    Serialization and Deserialization:
        Serde is utilized for seamless data exchange between the server and clients. No additional setup is required.

    Docker Configuration:
        Update the Dockerfile to expose the server port (e.g., EXPOSE 8000).

Usage:

    Building the Server:
        Run cargo build to compile the Rust project.

    Running the Server:
        Execute cargo run to start the Rocket server.

    Interacting with Endpoints:
        Access the server endpoints via HTTP requests (e.g., http://localhost:8000).

Example:

    Upon running the server, navigate to http://localhost:8000 in your web browser to view the "Welcome to Power Pay App!" message.

NB:

    Ensure that Docker is installed and running to utilize the Dockerfile configuration.
    