const v0 = /Bu\x60/dysu;
const v2 = new WeakMap();
function f3() {
    return v2;
}
function f4() {
    return f3;
}
Object.defineProperty(f3, Symbol.toPrimitive, { configurable: true, get: f4 });
const o12 = {
    m(a8, a9, a10, a11) {
        Object.defineProperty(v0, f3, { writable: true, configurable: true, value: WeakMap });
        return a10;
    },
};
try { o12.m(o12, f4, f4); } catch (e) {}
gc();
