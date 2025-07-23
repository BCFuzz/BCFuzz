function f0() {
}
const v2 = new Uint32Array();
const o3 = {
    "setPrototypeOf": f0,
};
const v5 = new Proxy(v2, o3);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    Reflect.setPrototypeOf(v5, [a9,a9,a9]);
}
new F6(f0, o3, v2, o3);
gc();
