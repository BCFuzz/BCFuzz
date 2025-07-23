const v0 = [2.0,-4.0];
function f1() {
    return f1;
}
function f2() {
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
    return f2();
}
function f14(a15) {
    return f2;
}
Object.defineProperty(f1, "toString", { configurable: true, get: f2, set: f14 });
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a18.toLocaleString(a20, a20, a18, a21);
}
const v23 = new F16(v0);
const v24 = v23.constructor;
try { new v24(f1); } catch (e) {}
gc();
