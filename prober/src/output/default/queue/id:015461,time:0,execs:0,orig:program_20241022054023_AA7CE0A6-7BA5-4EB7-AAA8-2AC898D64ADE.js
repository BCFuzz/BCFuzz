function f1() {
    return f1;
}
const v3 = [-1000000.0,-1.3627035914914707e+308,-2.220446049250313e-16,0.3341757671040231,-1.0818939815292406e+307,NaN];
function f4() {
    Object.defineProperty("POSITIVE_INFINITY", -1, { configurable: true, enumerable: true, set: f1 });
    return "POSITIVE_INFINITY";
}
Object.defineProperty(v3, 18, { get: f4 });
const o5 = {
    __proto__: v3,
};
try { o5.unshift(Uint8Array); } catch (e) {}
gc();
