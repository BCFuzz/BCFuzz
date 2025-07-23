function f0() {
}
const v1 = /i/mis;
const o2 = {
    "defineProperty": f0,
    "getOwnPropertyDescriptor": f0,
};
const v4 = new Proxy(v1, o2);
v4.c = v4;
gc();
