function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o4 = {
    "defineProperty": Array,
};
const v6 = new Proxy(v2, o4);
function f7() {
    function f8(a9, a10, a11) {
        Object.defineProperty(v6, "d", { configurable: true, get: f8, set: f7 });
        return Proxy;
    }
    f8(f8, o4, Proxy);
    return f8;
}
f7();
gc();
