use rocket::http::{ContentType, Status};
use rocket::local::blocking::Client;
use rocket::serde::json::json;
use rocket::serde::json::Value as JsonValue;

use crate::routes::health;
use crate::rocket;

//unit tests

#[test]
fn test_health() {
    let response = health();
    let expected_body = json!({"status": "ok"});

    assert_eq!(response, expected_body);
}

//integration tests

#[test]
fn test_health_endpoint() {
    let client = Client::tracked(rocket()).expect("valid rocket instance");
    let response = client.get("/health").dispatch();

    assert_eq!(response.status(), Status::Ok);
    assert_eq!(response.content_type(), Some(ContentType::JSON));

    let body_str = response.into_string().expect("valid response body");
    let body_json: JsonValue = serde_json::from_str(&body_str).expect("valid JSON response");

    let expected_body = json!({"status": "ok"});
    assert_eq!(body_json, expected_body);
}