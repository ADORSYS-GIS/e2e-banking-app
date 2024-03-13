// routes.rs

use rocket::serde::json::json;
use rocket::serde::json::Value as JsonValue;

#[get("/health")]
pub fn health() -> JsonValue {
    json!({"status": "ok"})
}
