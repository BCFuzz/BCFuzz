function f0() {
}
const o3 = {
    set c(a2) {
    },
};
const o4 = {
    "getOwnPropertyDescriptor": f0,
};
const v6 = new Proxy(o3, o4);
JSON.stringify(v6);
gc();
