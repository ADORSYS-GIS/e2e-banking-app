#[allow(dead_code)]
#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

use serde::{Serialize, Deserialize};
use rocket::{get, post, routes};
use rocket::serde::{Serialize, Deserialize};
use rocket::serde::json::Json;

#[derive(Serialize, Deserialize)]
struct MyData {
    name: String,
    age: u32,
}
#[get("/")]
fn index() -> &'static str {
    "Hello, Rocket server!"
}

#[post("/data", format = "json", data = "<my_data>")]
fn process_data(my_data: Json<MyData>) -> String {
    format!("Received data: Name={}, Age={}", my_data.name, my_data.age)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, process_data])
}