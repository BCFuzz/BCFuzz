function f1() {
    return f1;
}
const v3 = new Uint32Array();
const o4 = {
    "setPrototypeOf": f1,
};
const v6 = new Proxy(v3, o4);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(a11, a11, BigUint64Array); } catch (e) {}
    Reflect.setPrototypeOf(v6, a9);
}
new F7(f1);
gc();
