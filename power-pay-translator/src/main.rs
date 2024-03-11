#[macro_use]
extern crate rocket;
 
#[get("/")]
fn index() -> &'static str { 
    "Welcome to the Power Pay App!"
} 
 
#[launch] 
fn rocket() -> _ { 
    rocket::build().mount("/", routes![index]) 
}
