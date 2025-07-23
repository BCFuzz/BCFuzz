const v0 = /g\x0fU?/mygi;
const v1 = [-268435456,536870887];
function f2() {
    return v0;
}
v1[Symbol.toPrimitive] = f2;
try {
    Int32Array.prototype %= 7;
} catch(e7) {
    const v8 = e7.constructor;
    try { v8(v1); } catch (e) {}
}
gc();
