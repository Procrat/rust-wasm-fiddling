export function js_phone_home(vec) {
  return phone_home_callback(vec);
};

export function js_query_local_storage() {
  return query_local_storage_callback();
};


function phone_home_callback(vec) {
  let arr = rust_vec_to_js_array(vec);
  console.log("Called home and got", arr, "back");
  return js_array_to_rust_vec(["JS array", "returned", "from home"].concat(arr));
};

function query_local_storage_callback() {
  return localStorage.getItem("mystorage");
};


export function rust_vec_to_js_array(vec_pointer) {
  let arr = [];
  for (let i = 0; i < window.rust.get_vec_length(vec_pointer); i++) {
    arr.push(window.rust.get_vec_index(vec_pointer, i));
  }
  vec_pointer.free();
  return arr;
};

export function js_array_to_rust_vec(arr) {
  let vec = window.rust.make_vec();
  for (let i = 0; i < arr.length; i++) {
    window.rust.vec_append(vec, arr[i]);
  }
  return vec;
};
