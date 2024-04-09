FROM rust as base

WORKDIR /app

FROM base as builder

# Copy the Cargo.toml and Cargo.lock files to cache dependencies
COPY ./ ./

# Build the dependencies
RUN cargo build --release

FROM base

WORKDIR /app

COPY --from=builder /app/target/release/power-pay-translator /app/power-pay-translator

EXPOSE 8000

CMD ["/app/power-pay-translator"]