# Use the official Rust Docker image as the base image
FROM rust:1.76 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Cargo.toml file to the container
COPY Cargo.toml .

# Copy the source code to the container
COPY . .

# Build the project dependencies
RUN cargo build --release

# Set the entry point command to run the application
CMD ["./target/release/power-pay-translator"]