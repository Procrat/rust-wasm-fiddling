(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(n,t,r){"use strict";r.r(t),r.d(t,"__wbg_f_log_log_n",function(){return d}),r.d(t,"print_something",function(){return l}),r.d(t,"print_argument",function(){return g}),r.d(t,"manipulate_and_print_vec",function(){return w}),r.d(t,"manipulate_and_return_vec",function(){return a}),r.d(t,"__wbg_f_js_query_local_storage_js_query_local_storage_n",function(){return h}),r.d(t,"query_local_storage",function(){return v}),r.d(t,"change_key2",function(){return A}),r.d(t,"make_vec",function(){return E}),r.d(t,"get_vec_length",function(){return N}),r.d(t,"get_vec_index",function(){return T}),r.d(t,"vec_append",function(){return U}),r.d(t,"MyVec",function(){return z}),r.d(t,"__wbindgen_object_clone_ref",function(){return D}),r.d(t,"__wbindgen_object_drop_ref",function(){return M}),r.d(t,"__wbindgen_string_new",function(){return V}),r.d(t,"__wbindgen_number_new",function(){return B}),r.d(t,"__wbindgen_number_get",function(){return C}),r.d(t,"__wbindgen_undefined_new",function(){return F}),r.d(t,"__wbindgen_null_new",function(){return G}),r.d(t,"__wbindgen_is_null",function(){return H}),r.d(t,"__wbindgen_is_undefined",function(){return I}),r.d(t,"__wbindgen_boolean_new",function(){return K}),r.d(t,"__wbindgen_boolean_get",function(){return L}),r.d(t,"__wbindgen_symbol_new",function(){return P}),r.d(t,"__wbindgen_is_symbol",function(){return Q}),r.d(t,"__wbindgen_string_get",function(){return R}),r.d(t,"__wbindgen_json_parse",function(){return W}),r.d(t,"__wbindgen_json_serialize",function(){return X}),r.d(t,"__wbindgen_throw",function(){return Y});var e=r(3),u=r(0);const o=console.log;let i=new TextDecoder("utf-8"),c=null;function _(){return null!==c&&c.buffer===e.k.buffer||(c=new Uint8Array(e.k.buffer)),c}function f(n,t){return i.decode(_().subarray(n,n+t))}function d(n,t){let r=f(n,t);o(r)}function l(){return e.m()}let s=new TextEncoder("utf-8");function b(n){const t=s.encode(n),r=e.d(t.length);return _().set(t,r),[r,t.length]}function g(n){const[t,r]=b(n);try{return e.l(t,r)}finally{e.b(t,1*r)}}function w(n){return e.i(n.ptr)}function a(n){return z.__construct(e.j(n.ptr))}let p=null;function y(){return null!==p&&p.buffer===e.k.buffer||(p=new Uint32Array(e.k.buffer)),p}function h(n){const[t,r]=b(Object(u.b)()),e=y();e[n/4]=t,e[n/4+1]=r}let m=null;function j(){return null===m&&(m=e.c()),m}function v(){const n=j();e.n(n);const t=y(),r=t[n/4],u=t[n/4+1],o=f(r,u).slice();return e.b(r,1*u),o}let k=[],x=0;function J(n){x===k.length&&k.push(k.length+1);const t=x,r=k[t];return x=r,k[t]={obj:n,cnt:1},t<<1}let S=[];function q(n){if(1==(1&n))return S[n>>1];return k[n>>1].obj}function O(n){let t=k[n>>1];t.cnt-=1,t.cnt>0||(k[n>>1]=x,x=n>>1)}function A(n){return function(n){const t=q(n);return O(n),t}(e.e(J(n)))}function E(){return z.__construct(e.h())}function N(n){return e.g(n.ptr)}function T(n,t){const r=j();e.f(r,n.ptr,t);const u=y(),o=u[r/4],i=u[r/4+1],c=f(o,i).slice();return e.b(o,1*i),c}function U(n,t){const[r,u]=b(t);return e.o(n.ptr,r,u)}class z{static __construct(n){return new z(n)}constructor(n){this.ptr=n}free(){const n=this.ptr;this.ptr=0,e.a(n)}}function D(n){if(1==(1&n))return J(q(n));return k[n>>1].cnt+=1,n}function M(n){O(n)}function V(n,t){return J(f(n,t))}function B(n){return J(n)}function C(n,t){let r=q(n);return"number"==typeof r?r:(_()[t]=1,0)}function F(){return J(void 0)}function G(){return J(null)}function H(n){return null===q(n)?1:0}function I(n){return void 0===q(n)?1:0}function K(n){return J(1===n)}function L(n){let t=q(n);return"boolean"==typeof t?t?1:0:2}function P(n,t){let r;return J(r=0===n?Symbol():Symbol(f(n,t)))}function Q(n){return"symbol"==typeof q(n)?1:0}function R(n,t){let r=q(n);if("string"!=typeof r)return 0;const[e,u]=b(r);return y()[t/4]=u,e}function W(n,t){return J(JSON.parse(f(n,t)))}function X(n,t){const[r,e]=b(JSON.stringify(q(n)));return y()[t/4]=r,e}function Y(n,t){throw new Error(f(n,t))}},function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(2);e.p()}]]);