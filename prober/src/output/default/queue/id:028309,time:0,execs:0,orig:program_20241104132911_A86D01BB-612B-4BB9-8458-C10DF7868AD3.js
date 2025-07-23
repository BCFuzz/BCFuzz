function f0() {
    return f0;
}
const v2 = [-1000000.0,-1.3627035914914707e+308,-2.220446049250313e-16,0.3341757671040231,-1.0818939815292406e+307,NaN];
function f3() {
    Object.defineProperty("POSITIVE_INFINITY", -1, { configurable: true, enumerable: true, set: f0 });
    return f3;
}
Object.defineProperty(v2, 0, { get: f3 });
const o4 = {
    __proto__: v2,
};
try { o4.toLocaleString(); } catch (e) {}
gc();
