function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v6 = new Uint8ClampedArray();
function f7() {
    return F0;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(v6, "h", { configurable: true, enumerable: true, get: f7, set: f8 });
function f10() {
    return F0;
}
function f11() {
    return f10;
}
const o12 = {
};
const v14 = new Proxy(v6, o12);
const o15 = {
    "defineProperty": f11,
};
const v16 = new Proxy(v14, o15);
Object.defineProperty(v16, "h", { writable: true, configurable: true, enumerable: true, value: v4 });
gc();
