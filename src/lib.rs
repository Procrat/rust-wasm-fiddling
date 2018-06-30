#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

#[macro_use]
extern crate serde_derive;
extern crate wasm_bindgen;


#[macro_use]
pub mod console {
    use wasm_bindgen;

    #[wasm_bindgen]
    extern {
        #[wasm_bindgen(js_namespace = console)]
        pub fn log(msg: &str);
    }

    // A macro to provide `println!(..)`-style syntax for `console.log` logging.
    macro_rules! log {
        ($($t:tt)*) => (::console::log(&format!($($t)*)))
    }
}

mod other_lib;


use std::ops::Index;

use wasm_bindgen::prelude::*;

use other_lib::SomeTrait;


#[wasm_bindgen]
pub fn print_something() {
    other_lib::print_argument("Rust function called from JS: ⚡ ∑ ♥ ")
}


#[wasm_bindgen]
pub fn print_argument(s: &str) {
    other_lib::print_argument(s)
}


#[wasm_bindgen]
pub fn manipulate_and_print_vec(vec: &MyVec) {
    let vec = vec.0.iter().map(|x| x.as_str()).collect::<Vec<&str>>();
    other_lib::manipulate_and_print_array(&vec)
}


#[wasm_bindgen]
pub fn manipulate_and_return_vec(vec: &MyVec) -> MyVec {
    let array = vec.0.iter().map(|x| x.as_str()).collect::<Vec<&str>>();
    let manipulated_array = other_lib::manipulate_and_return_array(&array)
        .into_iter()
        .map(|x| x.to_owned())
        .collect();
    MyVec(manipulated_array)
}


#[wasm_bindgen(module = "./lib")]
extern {
    pub fn js_phone_home(arr: MyVec) -> MyVec;
    pub fn js_query_local_storage() -> String;
}


struct X;

impl SomeTrait for X {
    fn manipulate_and_return_array<'a, 'b>(&self, array: &'b [&'a str]) -> Vec<String> {
        let arr = array.into_iter()
            .map(|x| x.to_owned().to_owned())
            .collect::<Vec<String>>();
        js_phone_home(MyVec(arr)).0
    }
}

#[wasm_bindgen]
pub fn phone_home(vec: MyVec) -> MyVec {
    let vec = vec.0;
    let array = vec.iter().map(|x| x.as_str()).collect::<Vec<&str>>();
    let manipulated_array = other_lib::phone_home(&X {}, &array);
    MyVec(manipulated_array)
}


#[wasm_bindgen]
pub fn query_local_storage() -> String {
    js_query_local_storage()
}

#[derive(Debug, Serialize, Deserialize)]
struct Y {
    key1: String,
    key2: String,
    a_list: Vec<String>,
}

#[wasm_bindgen]
pub fn change_key2(y: JsValue) -> JsValue {
    let mut parsed: Y = y.into_serde().unwrap();
    parsed.key2 = "changed value".to_owned();
    parsed.a_list.push("item2: ⚡ ∑ ♥ ".to_owned());
    JsValue::from_serde(&parsed).unwrap()
}


// Utility functions for turning JS arrays into Rust vectors and vice versa.

#[wasm_bindgen]
pub struct MyVec(Vec<String>);

#[wasm_bindgen]
pub fn make_vec() -> MyVec {
    MyVec(Vec::new())
}

#[wasm_bindgen]
pub fn get_vec_length(vec: &MyVec) -> usize {
    vec.0.len()
}

#[wasm_bindgen]
pub fn get_vec_index(vec: &MyVec, index: usize) -> String {
    vec.0.index(index).to_owned()
}

#[wasm_bindgen]
pub fn vec_append(vec: &mut MyVec, string: String) {
    vec.0.push(string);
}
