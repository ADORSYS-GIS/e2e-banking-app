#[cfg(test)]
mod tests {
    use rocket::http::{ContentType, Status};
    use rocket::local::blocking::Client;
    use serde_json::json;

    use crate::routes::health;
    use crate::rocket;

    #[test]
    fn test_health_endpoint() {
        let client = Client::tracked(rocket()).expect("valid rocket instance");

        // Test server start-up state
        let response = client.get("/health").dispatch();
        assert_eq!(response.status(), Status::Ok);
        assert_eq!(response.content_type(), Some(ContentType::JSON));

        let body: serde_json::Value = serde_json::from_str(&response.into_string().unwrap()).unwrap();
        assert_eq!(body["status"], "ok");

        // Test running state
        let response = client.get("/health").dispatch();
        assert_eq!(response.status(), Status::Ok);
        assert_eq!(response.content_type(), Some(ContentType::JSON));

        let body: serde_json::Value = serde_json::from_str(&response.into_string().unwrap()).unwrap();
        assert_eq!(body["status"], "ok");
    }
}