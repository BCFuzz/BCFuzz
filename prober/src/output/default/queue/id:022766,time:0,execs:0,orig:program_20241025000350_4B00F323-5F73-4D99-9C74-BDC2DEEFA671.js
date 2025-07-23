class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
const o3 = {
    "getOwnPropertyDescriptor": f2,
};
const v5 = new Proxy(v1, o3);
try { v5.hasOwnProperty(); } catch (e) {}
gc();
