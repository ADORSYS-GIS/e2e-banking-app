use serde_json::json;
use rocket::serde::json::{Json, Value as JsonValue};

#[get("/health")]
pub fn health() -> Json<JsonValue> {
    let status = json!({"status": "ok"});
    Json(status)
}
