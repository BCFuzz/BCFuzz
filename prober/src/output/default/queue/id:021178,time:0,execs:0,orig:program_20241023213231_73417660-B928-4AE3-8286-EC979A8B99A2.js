const v1 = new Uint8ClampedArray();
function f2() {
    return f2;
}
function f3() {
    return f2;
}
const o4 = {
};
const v6 = new Proxy(v1, o4);
const o7 = {
    "defineProperty": f3,
};
const v8 = new Proxy(v6, o7);
v8.h = v8;
gc();
