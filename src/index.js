import { js_array_to_rust_vec, rust_vec_to_js_array } from "./lib.js";

const helloWorld = import("./rust_wasm_poc.js");

helloWorld.then(rust => {
  window.rust = rust;
  main(rust);
});


function main(rust) {
  rust.print_something();

  rust.print_argument("Rust function called from JS with string arg: \u03A9\u26a1\u2211");

  let arr = ["JS array", "being passed", "to rust", "\u03A9\u26a1\u2211"];
  let vec = js_array_to_rust_vec(arr);
  rust.manipulate_and_print_vec(vec);
  vec.free();

  let arr2 = ["JS array", "passed and returned", "to and from rust", "\u03A9\u26a1\u2211"];
  let vec2 = js_array_to_rust_vec(arr2);
  let new_arr = rust_vec_to_js_array(rust.manipulate_and_return_vec(vec2));
  console.log(new_arr);
  // manipulate_and_return_vec takes a reference, so we need to free vec2 manually
  vec2.free();

  // Return Rust structs from JS is not supported yet:
  let arr3 = ["JS array", "passed and returned", "to and from rust", "\u03A9\u26a1\u2211"];
  let vec3 = js_array_to_rust_vec(arr3);
  let new_arr3 = rust_vec_to_js_array(rust.phone_home(vec3));
  console.log(new_arr3);
  // phone_home takes an owned value, so there is no need to free vec3

  let item = { key1: "value 1", key2: "value 2", a_list: ["item1: \u03A9\u26a1\u2211"] };
  localStorage.setItem("mystorage", JSON.stringify(item));
  let item_rx = JSON.parse(rust.query_local_storage());
  console.log(item_rx);

  let item_rx2 = rust.change_key2(item);
  console.log(item_rx2);
};
