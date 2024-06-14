use clap::Parser;

mod server;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[command(version, about)]
struct Args {
    /// Name of the person to greet
    #[arg(long)]
    use_https: Option<bool>,
}


/// Create custom server, wire it to the autogenerated router,
/// and pass it to the web server.
#[tokio::main]
async fn main() {
    env_logger::init();

    let args = Args::parse();

    let addr = "0.0.0.0:8000";

    server::create(addr, args.use_https.unwrap_or_else(|| false)).await;
}
