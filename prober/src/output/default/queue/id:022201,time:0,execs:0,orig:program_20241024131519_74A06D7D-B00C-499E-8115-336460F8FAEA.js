const v1 = new Uint8ClampedArray(Uint8ClampedArray);
function f2() {
    return f2;
}
function f3() {
    return f2;
}
const v5 = new Proxy(v1, f2);
const o6 = {
    "defineProperty": f3,
};
const v7 = new Proxy(v5, o6);
v7.h = v7;
gc();
